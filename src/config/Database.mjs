import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv()
const DB = {
    dialect: "mysql",
    database: process.env.DB_NAME,
    username: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT
}
const db = new Sequelize(DB);

if (db.sync()){
    console.log("connection sync ")
} else {
    console.log("connection refused")
    db.close()
}

export default db;