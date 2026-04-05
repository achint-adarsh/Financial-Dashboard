import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import recordRoutes from "./routes/recordRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running",
        auth: {
            register: "POST /api/auth/register",
            login: "POST /api/auth/login",
            me: "GET /api/auth/me"
        },

        records: {
            getAll: "GET /api/records",
            create: "POST /api/records",
            update: "PUT /api/records/:id",
            delete: "DELETE /api/records/:id"
        },

        dashboard: {
            summary: "GET /api/dashboard/summary"
        }
    });
})

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(errorHandler);

export default app;