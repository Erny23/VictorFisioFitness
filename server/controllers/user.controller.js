import { Router } from 'express'
//import fs from 'node:fs'
//import path from 'node:path';

// importar base de datos
import { db } from '../database.js';

const router = Router();

/*
// Ejemplo de ruta que devuelve el contenido del archivo data.json
router.get('/', (req, res) => {
  const file = path.resolve('./database_example/datos.json');
  const data = fs.readFileSync(file, 'utf8');
  const info = JSON.parse(data);
  res.json(info);
});
*/

// 
router.post('/', async (req, res) => {

  //desestructurando los parametro que se envian del cuarpo de la plantilla html
  const { nombre, correo, telefono, sexo, fecha, peso, altura, meta} = req.body;

  //asignando valor a un objeto user
  const user = {
    nombre,
    correo,
    telefono,
    sexo,
    fecha,
    peso,
    altura,
    meta
  }

  // asignar usuario a la base de datos
  await db.query('INSERT INTO fisiofitness set ?', [user]);

  res.end();
})

export { router };