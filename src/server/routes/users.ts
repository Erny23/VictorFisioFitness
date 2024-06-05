import { Router, Response } from 'express'
//import bodyParser from "body-parser";
import fs from 'node:fs'

const router = Router();

// Ejemplo de ruta que devuelve el contenido del archivo data.json
router.get('/', (req, res: Response) => {
    // Leer el archivo JSON
    fs.readFile('../../database/base.json','utf-8', async (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al leer el archivo JSON');
        return;
      }
      const parsedData = JSON.parse(data);
  
      // Enviar el archivo JSON como respuesta
      res.json(parsedData);
    });

});

export { router };