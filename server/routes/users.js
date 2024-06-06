import { Router } from 'express'
import fs from 'node:fs'
import path from 'node:path';

const router = Router();

// Ejemplo de ruta que devuelve el contenido del archivo data.json
router.get('/user', (req, res) => {
  const file = path.resolve('./src/database/datos.json');
  const data = fs.readFileSync(file, 'utf8');
  const info = JSON.parse(data);
  res.json(info);
});

export { router };