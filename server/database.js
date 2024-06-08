import mysql from 'mysql'
import { promisify } from 'node:util';
import { database } from './keys.js'

const db = mysql.createPool(database);

db.getConnection((err, connection) => {
    // si hay un error que lo retorne
    if(err) throw err;

    // si la coneccion a sido exitos que la realice
    if(connection) connection.release();
    return;
})

//para que mi objeto db pueda usar promesas cada vez que se le usa la funcion Query
db.query = promisify(db.query);

export { db };