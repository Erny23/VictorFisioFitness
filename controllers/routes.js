import express from "express";
import bodyParser from "body-parser";
import controller from "./controller.js";

const router = express.Router();

router.use(bodyParser.json());

router.get("/data", controller.check);

router.post("/google", controller.google)

export default router