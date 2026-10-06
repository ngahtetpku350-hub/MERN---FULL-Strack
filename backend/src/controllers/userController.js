import User from "../schemas/user.js"


export const userLists = async (req, res) => {
    const users = await User.find()

    return res.json({
        message:"hi",
        userlists : users
    })
}

export const userCreate = async (req, res) => {
    const {name, email, password} = req.body;
    
    if (name == "" || email == "" || password== "")

        console.log("all fiel are required")
        return res.json({
            success : "fial",
            message : "all fields are need"
        });
}