import express from "express";
import { getStudents, getStudentById } from "../controller/StudentController.js";
const router = express.Router();

router.get("/allStudents",getStudents)

router.get("/student/:id",getStudentById)
export default router;