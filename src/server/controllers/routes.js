import express from "express";
import bodyParser from "body-parser";
import {
  users
} from "./controller";

const router = express.Router();

router.use(bodyParser.json());

router.use(users)

router.get("/data", (req, res) => {
  res.json({message: "Mensaje de APIRest"});
});

export default router;