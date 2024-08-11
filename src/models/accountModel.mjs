import db from "../config/Database.mjs";
import { DataTypes } from "sequelize";

const Account = db.define('account',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM("guru", "murid", "admin"),
    },
    nama_lengkap:{
        type: DataTypes.STRING,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
    },
    username:{
        type: DataTypes.STRING,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    }
},{
    tableName: "account",
    timestamps: false
})

export default Account;