import mongoose from "mongoose";
//import { authRequired } from "../middlewares/validateToken";

const reportSchema = new mongoose.Schema({
    patient: {
        type: String,
        require: true,
    },
/*     date: {
        type: Date,
        required: true,
    }, */
    report: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
}, {
    timestamps: true,
});

export default mongoose.model("Report", reportSchema);