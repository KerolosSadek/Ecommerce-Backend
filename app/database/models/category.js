const mongoose = require("mongoose")
const categorySchema = mongoose.Schema({
    name: {
        type:String, 
        trim:true, 
        required:true
    },
    image: {
        type:String, 
        trim:true, 
        default:"-"
    }
    
})

categorySchema.virtual("myProducts", {
    ref:"Product",
    localField: "_id",
    foreignField:"categoryId"
})

const Category = mongoose.model("Category", categorySchema)
module.exports = Category