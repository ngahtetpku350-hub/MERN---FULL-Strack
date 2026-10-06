
import Post from "../schemas/post.js";
// await က data call ချင်တဲ့ နေရာမာ ထည့်
export const postList = async (req, res) => {
    const posts = await Post.find()
    return res.json({
        name : "thue htet naing",
        postlist:posts
    }) 
};

export const postCreate = async (req, res) => {

        const { title, author, viewer, description } = req.body;

        if (!title || !author) {
            return res.status(400).json({
                success: false,
                message: "All fields are needed"
            });
        }
        const post = await Post.create({
            title,
            author,
            viewer,
            description
        });

        return res.status(201).json({
            success: true,
            message: "success",
            post: post,
        });
};

export const postUpdate = async (req, res) => {
    const {id} = req.params;
    const {title,author,viewer,description} = req.body;
    const updatepost = await Post.findById(id)
    updatepost.title = title ? title : updatepost.title;
    updatepost.author = author ?? updatepost.author;
    updatepost.viewer = viewer ?? updatepost.viewer;
    updatepost.description = description ? description : updatepost.description;

    await updatepost.save()
    return res.json({
        message:"update successfully ",
        updatepost:updatepost
    })
};

// connection fomula 
//  updatepost.title = new_title ? new_title : updatepost.title;
//     updatepost.author = new_author ?? updatepost.author;
//     updatepost.new_views = new_views ?? updatepost.views;
//     updatepost.new_description = new_description ? new_description : updatepost.description;

export const postDelete = async (req, res) => {
    const {id} = req.params;
    const deletepost = await Post.findById(id);

    await deletepost.deleteOne()
    return res.json({
        message:"delete successfully ",
        deletepost:deletepost
    })
};

// {id} လို့ သုံးတာက object ထဲးက တိုက် ရိုက်ယူသုံး လို့ ရ အောင်လို့ 
// other way const id = req.params.id 

export const postDetail = async (req, res) => {
    const id = req.params.id
    const detailspost = await Post.findById(id);

    // await detailspost.find();
     return res.json({
        message: "detail post data",
        detailspost:detailspost
    })
};