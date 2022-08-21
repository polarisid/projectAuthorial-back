import { Router } from "express";
import defaultController from "../controllers/defaultController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { defaultSchema } from "../schemas/defaultSchema.js";
const defaultRouter = Router();

defaultRouter.get("/", defaultController.defaultGet);
defaultRouter.post(
	"/",
	validateSchemaMiddleware(defaultSchema),
	defaultController.defaultPost
);

export default defaultRouter;
