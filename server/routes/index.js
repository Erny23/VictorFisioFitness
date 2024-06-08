import { Router } from "express";
import { readdirSync } from "node:fs";
import path from "path";
import { router } from "./users";

//const router = Router();
const CURRENT_PATH =  __dirname;

readdirSync(CURRENT_PATH).filter((file) => {
    console.log(file);
})

export { router };