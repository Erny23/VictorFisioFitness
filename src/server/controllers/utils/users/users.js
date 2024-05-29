import express from 'express'
import bodyParser from "body-parser";
import fs from 'node:fs'

const datosUser = fs.readFile('../../database/base.json')
if(!datosUser){
    console.log('no se encuentra el archivo buscado')
}

const users = express.Router()

users.use(bodyParser.json())

users.use('/users',datosUser)

export default users;

