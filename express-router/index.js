import express from "express";
import StudentRoutes from "./routes/StudentRoutes.js";

const app = express();
app.use("/api", StudentRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});