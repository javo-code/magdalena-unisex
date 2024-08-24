
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
export const register = async (req, res) => {
    const { userName, email, password } = req.body;

    try {

        const paswwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName,
            email,
            password: paswwordHash,
        });
        //console.log(newUser);
        const userSaved = await newUser.save();
        res.send({
            id: userSaved._id,
            userName: userSaved.userName,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,

        });
    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) => {
    res.send('login')
}