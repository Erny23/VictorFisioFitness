import { Router } from 'express'
// importacion de herramientas para la lectura de archivo json de prueba
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

// evento post de la ruta
router.post('/', async (req, res) => {

  //desestructurando los parametro que se envian del cuarpo de la plantilla html
  const body = await req.body;

  const { name, email, picture, password, user_type } = body;

  //asignando valor a un objeto user
  const User = {
    nombre: name,
    correo: email,
    img: picture,
    password: password,
    user_type: user_type
  }

  try{
    // asignar usuario a la base de datos
    await db.query('INSERT INTO users set ?', [User]);

    return res.status(200).send('verify data base ->');
  } catch(error){
    const response = res.json(
      { message: error instanceof Error ? error.message: "No hubo conexion con la base de datos." },
      { status: 400 }
    );
    return response;
  }
});

//metodo get
router.get('/', async (req, res) => {
  const users = await db.query('SELECT * FROM users');

  res.send(users);
})

export default router;