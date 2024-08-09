import mongoose from "mongoose"
import {Complaint} from "../models/complaint.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"

const getAllVideos = asyncHandler(async (req, res) => {
    
    const { page = 1, limit = 10, query = null, sortBy = "views", sortType = -1, userId } = req.query
    console.log(query);
    const skip = (page-1)*limit;
    
    let keyWords = [""] ;

    if(!(query === null)){
        keyWords =  query.split(" ");
    } 
    if( ! keyWords.length>0 ){
        
        const allVideos = await Video.aggregate([
            {
                "$lookup": {
                  "from": "users",
                  "localField": "owner",
                  "foreignField": "_id",
                  "as": "ownerDetails"
                }
              },
              {
               "$addFields": {
                  "ownerDetails": { "$arrayElemAt": ["$ownerDetails", 0] },
                  "uploaded" : "$createdAt"
                }
            },
            {
              "$project": {
                "title": 1,
                "description": 1,
                "videoFile":1,
                "thumbnail": 1,
                "views":1,
                "ownerDetails.avatar": 1,
                "ownerDetails.username": 1,
                "uploaded" : 1
              }
            }
        ]).skip(skip).limit(limit).sort({ [sortBy]: sortType });
        console.log(allVideos);
        return res
        .status(200)
        .json(
            new ApiResponse(200,allVideos,"Videos fetched ")
        )
    }
    
    const searchedVideos = await Video.aggregate([
        {
          "$addFields": {
            "titleArray": {"$split" : [ {"$toLower ":"$title"}, " "]},
            "descriptionArray": {"$split" : [ {"$toLower" :"$description"}," "]
          }
        }
    } ,
    {
  "$redact": {
    "$cond": {
      "if": {
        "$or": [
          {
            "$gt": [
              { "$size": { "$setIntersection": ["$descriptionArray", "$keyWords"] } },
              0
            ]
          },
          {
            "$gt": [
              { "$size": { "$setIntersection": ["$titleArray", "$keyWords"] } },
              0
            ]
          }
        ]
      },
      "then": "$$KEEP",
      "else": "$$PRUNE"
    }
  }
}

    ,
        {
            "$lookup": {
              "from": "users",
              "localField": "owner",
              "foreignField": "_id",
              "as": "ownerDetails"
            }
          },
           ,
        {
          "$project": {
            "title": 1, 
            "description": 1,
            "videoFile":1,
            "thumbnail": 1,
            "views":1,
            "ownerDetails.avatar": 1,
            "ownerDetails.username": 1,
            "uploaded" : 1
          }
        }
      ]).skip(skip).limit(limit).sort({ [sortBy]: sortType });;
      
      

    return res
    .status(200)
    .json(
        new ApiResponse(200,searchedVideos,"videos Retrived")
    )

})

const publishAComplaint = asyncHandler(async (req, res) => {
    
    const { school,category, description} = req.body;

    if (!category || !description){
        throw new ApiError(400,"Title and description are required");
    }

    const newComplaint = await Complaint.create({
        category : category,
        description : description,
        school : school,
        owner : req.user?._id
    })

    if(! newComplaint) {
        throw new ApiError(500,"Error while uploading complaint");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,newComplaint,"The Complaint has been published successfully")
    )
})



export {
    publishAComplaint
}
