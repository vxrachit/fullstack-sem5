const express = require("express");
const Record = require("../models/Record");
const router = express.Router();

// Baseline: intentionally returns every record for the first experiment.
router.get("/all", async (req, res) => {
  try {
    const records = await Record.find({}).sort({ _id: 1 }).lean();
    res.json({ records });
  } catch (error) {
    console.error("GET /api/records/all failed:", error);
    res.status(500).json({ message: "Failed to load all records" });
  }
});



router.get("/", async (req, res) => {
  try {
    const parsedPage = Number.parseInt(req.query.page);
    const parsedLimit = Number.parseInt(req.query.limit);
    const page = Number.isInteger(parsedPage) && parsedPage >0 ? parsedPage : 1;
    const requestedLimit = Number.isInteger(parsedLimit) && parsedLimit >0 ? parsedLimit : 50;
    const limit = Math.min(requestedLimit, 100);
    const skip = (page - 1) * limit;
    const [records , total] = await Promise.all([
      Record.find({}).sort({_id:1}).skip(skip).limit(limit).lean(),
      Record.countDocuments()
    ])
    const totalPages = Math.ceil(total/limit);
    res.status(200).json({records , pagination:{total , page , totalPages , hasNextPage: page < totalPages , hasPreviousPage: page > 1 , limit} });
  } catch (error) {
    console.error("GET /api/records failed:", error);
    res.status(500).json({ message: "Failed to load records" });
  }
});

module.exports = router;
