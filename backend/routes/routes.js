import express from "express";
import {
  getDepartment,
  deleteDepartment,
  updateDepartment,
  postDepartment,
} from "../controllers/department.js";

const router = express.Router();

//department(DONE)
router.get("/getdepartments", getDepartment);
router.post("/postdepartment", postDepartment);
router.delete("/deletedepartment/:id", deleteDepartment);
router.put("/updatedepartment/:id", updateDepartment);

export default router;
