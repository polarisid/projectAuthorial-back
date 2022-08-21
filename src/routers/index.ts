import { Router } from "express";
import defaultRouter from "./defaultRouter.js";

const router = Router();

router.use(defaultRouter);

export default router;
