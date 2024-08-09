import mongoose from 'mongoose';

import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'; //used to write aggregate pipelines in mongodb

const complaintSchema = mongoose.Schema({
    school : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "School"
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

},{
    timestamps:true
})

complaintSchema.plugin(mongooseAggregatePaginate);

export const Complaint = mongoose.model("Complaint",complaintSchema); 