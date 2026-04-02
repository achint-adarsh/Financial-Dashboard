import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import recordRoutes from "../routes/recordRoutes.js";
import authRoutes from "../routes/authRoutes.js";
import dashboardRoutes from "../routes/dashboardRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// app.use("/", (req,res) =>{
//     res.status(200).json({message:"Welcome to the Financial Dashboard API"});
// })

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(errorHandler);

export default app;