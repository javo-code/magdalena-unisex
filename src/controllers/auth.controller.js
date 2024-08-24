
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { createAccesToken } from "../libs/jwt.js";


export const register = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const paswwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName,
            email,
            password: paswwordHash
        });

        console.log(newUser);
        
        const userSaved = await newUser.save();

        const token = await createAccesToken({ id: userSaved._id})
        res.cookie('token', token);
        
        res.json({
            id: userSaved._id,
            user: userSaved.userName,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedeAt: userSaved.updatedAt,
        });

    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "User not found" });
        
        const isMAtch = await bcrypt.compare(password, userFound.password);

        if (!isMAtch) return res(400).json({ message: 'Incorrect Password' });

        const token = await createAccesToken({ id: userFound._id})
        res.cookie('token', token);
        
        res.json({
            id: userFound._id,
            user: userFound.userName,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedeAt: userFound.updatedAt,
        });

    } catch (error) {
        console.log(error);
    }
}