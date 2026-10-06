
import Category from "../schemas/category.js";

export const categoryList = async(req,res)=> {
    const category = await Category.find()

    return res.status(200).json({
        success:"ture",
        message:"Category Liat",
        catefgorys: category
    })
};
       
export const categoryCreate = async(req,res) => {
    const name = req.body;

    if(name == ""){
        return res.status(400).json({
            success: "fail",
            message:"name is needed"
        })
    }
    const category = await Category.create({
            name
        });

    return res.status(201).json({
            success: true,
            message: "success",
            post: post,
        });
}

