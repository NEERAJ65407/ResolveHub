import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const feedbackSchema = mongoose.Schema(
    {
        content : {
            type : String
        },
        video : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Video"
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {   
    timestamps : true
    }
) 

feedbackSchema.plugin(mongooseAggregatePaginate);

export const Feedback = mongoose.model("Feedback",feedbackSchema);