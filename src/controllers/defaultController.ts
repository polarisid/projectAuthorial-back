import { Request, Response } from "express";

async function defaultGet(req: Request, res: Response) {
	res.send("Hello World!");
}

async function defaultPost(req: Request, res: Response) {
	res.send("Hello World!");
}
export default {
	defaultGet,
	defaultPost,
};
