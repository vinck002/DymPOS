import "dotenv/config"
import express from "express";
import cors from 'cors'
import {router} from './routes'
import db from "./config/mongo";
// import User from "./models/userModel";
import * as MySQLConnector from './config/mysqlConector';
import { IUser } from "./interfaces/User.interface";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
 app.use(cors());
app.use(router);

//create databvase pool
MySQLConnector.init();

   MySQLConnector.execute<IUser[]>('select * from Users where Role = ?;', ['user']).then(
    res => {
      console.log(res);
    },(err) => console.log(err)
  );


// app   // mongo
// const user = new User({
//         username: 'User',
//         pass: '123456',
//         age: 25, 
//         documentID: '2212sw12'
//     }).save();
//  db().then(() =>{ console.log('conexion ready') });

app.listen(PORT,() => console.log(`LISTO POR EL PUERT: ${PORT}`));

