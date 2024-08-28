import Report from "../models/report.model.js";

export const getReports = async (req, res) => {
    const reports = await Report.find();
    res.json(reports);
};

export const createReport = async (req, res) => {
    const { date, patient, report } = req.body
    
    const newReport = new Report({
        date,
        patient,
        report
    })
    const savedReport = await newReport.save();
    res.json(savedReport);
};

export const getReport = async (req, res) => {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.json(report);
};

export const updateReport = async (req, res) => {
    const report = findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.json(report);
};

export const deleteReport = async (req, res) => {
    const report = findByIdAndDelete(req.params.id)
    if (!report) return res.status(404).json({ message: "Report not found" })
    res.json(report);
};

