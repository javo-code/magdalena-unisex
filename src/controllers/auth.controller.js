
import User from "../models/user.model.js";
export const register = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const newUser = new User({
            userName,
            email,
            password
        });
        console.log(newUser);
        const userSaved = await newUser.save();
        res.send(userSaved);
    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) => {
    res.send('login')
}