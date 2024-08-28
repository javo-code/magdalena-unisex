import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    patient: {
        type: String,
        require: true,
    },
    report: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Report", reportSchema);