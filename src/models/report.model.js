import mongoose from "mongoose";
//import { authRequired } from "../middlewares/validateToken";

const reportSchema = new mongoose.Schema({
    patientname: {
        type: String,
        require: true,
    },
    report: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    date: {
        type: String,
        default: Date.now,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Report", reportSchema);