import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
 import { getReports, createReport, getReport, updateReport, deleteReport } from "../controllers/reports.controller.js";

const router = Router();

router.get("/reports", authRequired, getReports);

router.post("/reports", authRequired, createReport);

router.get("/reports/:id", authRequired, getReport );

router.put("/reports/:id", authRequired, updateReport);

router.delete("/reports/:id", authRequired, deleteReport);


export default router;