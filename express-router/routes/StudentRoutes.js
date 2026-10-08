import express from "express";
const router = express.Router();

router.get("/allStudents",(req,res) => {
    res.send("All Students Data");
})

router.get("/student/:id",(req,res) =>{
    res.json({
        "id": req.params.id,
    })
})

export default router;