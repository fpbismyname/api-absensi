import express from "express";
import { loginAccount, AddAccount} from "../controllers/accountControllers.mjs";

const accountRouter = express.Router();

accountRouter.post("/login", loginAccount)
accountRouter.post("/register", AddAccount)


export default accountRouter