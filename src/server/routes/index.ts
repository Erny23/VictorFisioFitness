import express from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = express.Router();

const cargarFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cargarFileName(fileName)

    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`,moduleRouter.router);
        })
    }
});

export { router };