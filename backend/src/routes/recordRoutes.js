import express from 'express';
import * as controller from '../controllers/recordController.js';
import {protect} from '../middleware/authMiddleware.js';
import {authorize} from '../middleware/roleMiddleware.js'

const router = express.Router();

router.use(protect);

router.get("/", authorize("viewer", "analyst", "admin"), controller.getAll);

router.post("/", authorize("analyst", "admin"), controller.create);

router.put(":/id", authorize("admin"), controller.update);
router.delete(":/id", authorize("admin"), controller.remove);

export default router;
