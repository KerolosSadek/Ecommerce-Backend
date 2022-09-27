const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    // categoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category", 
    //     required: true
    // },
    image: {
        type: String, 
        trim: true, 
        default: "-"
    },
    title: {
        type: String, 
        trim: true, 
        required: true
    },
    content: {
        type: String, 
        trim: true, 
        required: true
    },
    price: {
        type: Number, 
        trim: true, 
        required: true
    },
    qty: {
        type: Number
    },
    Added: {
        type: Date, 
        default: Date.now()
    }
},
    { timestamps: true }
)
const Product = mongoose.model("Product", productSchema)
module.exports = Product