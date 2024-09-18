import { z } from "zod";

export const createReportSchema = z.object({
    patientname: z
        .string({
            required_error: "Patient name is required"
        }),
    date: z
        .string()
        //.datetime({ message: "Date must be a valid ISO datetime" })  // Se valida que sea una fecha ISO válida
        .optional(),
    report: z
        .string({
            required_error: "Report must be a string"
        })
        .min(10, {
            message: "Report must be at least 10 characters"
        }),
    username: z
        .string({
            required_error: "Username is required"
        })
});
