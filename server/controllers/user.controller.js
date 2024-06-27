import { Router } from 'express';

// importar base de datos
import { db } from '../database.js';

const router = Router();

// evento POST del registro de usuarios
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

//evento GET del registro de usuarios
router.get('/', async (req, res) => {
  const dataUsers = await db.query('SELECT * FROM users');
  const users = JSON.stringify(dataUsers);
  res.json(users);
});

//evento DELETE del registro de usuarios
//router.delete('/', async (req, res));

export default router;