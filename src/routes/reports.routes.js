import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getReports, createReport, getReport, updateReport, deleteReport } from "../controllers/reports.controller.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { createReportSchema } from "../schemas/report.schema.js";
const router = Router();

router.get("/reports", authRequired, getReports, (req, res)=>{
    res.send('reports');
});

router.post("/reports", authRequired, validatorSchema(createReportSchema), createReport, (req, res)=>{
    res.send('report created');
});

router.get("/reports/:id", authRequired, getReport, (req, res)=>{
    res.send("you got a report by it's ID");
});

router.put("/reports/:id", authRequired, updateReport, (req, res)=>{
    res.send('report updated');
});

router.delete("/reports/:id", authRequired, deleteReport, (req, res)=>{
    res.send('report deleted');
});


export default router;