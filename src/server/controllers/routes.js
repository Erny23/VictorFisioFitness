import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json());

router.get("/data", (req, res) => {
  res.json({message: "Mensaje de APIRest"});
});

export default router;