import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {authorize} from "../middleware/roleMiddleware.js";
import {getSummary} from "../controllers/dashboardController.js";

const router = express.Router();

router.get(
    "/summary",
    protect,
    authorize("analyst", "admin"),
    getSummary
);

export default router;