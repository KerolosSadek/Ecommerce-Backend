const categoryModel = require("../database/models/category")
const productModel = require("../database/models/product")

class Category {
    //Admin

    static all = async(req,res) =>{
        try{
            const category = await categoryModel.find()
            res.status(200).send({
                apiStatus: true,
                data: category,
                message: "Categories Fetched Successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e,
                message: e.message
            })
        }
    }
    static delete = async(req,res) =>{
        try{
            const category = await productModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus: true,
                data: category,
                message: "Category Deleted Successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data: e,
                message: e.message
            })
        }
    }
}
module.exports = Category