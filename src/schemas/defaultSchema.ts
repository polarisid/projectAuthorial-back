import Joi from "joi";
import { CreateUserData } from "../services/defaultService";

export const defaultSchema = Joi.object<CreateUserData>({
	email: Joi.string().required(),
	password: Joi.string().required(),
});
