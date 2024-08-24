import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/magdalena-unisex');
        console.log('Now your connected to mongoDB 📚')
    } catch(error){
        console.log(error);
    }
}