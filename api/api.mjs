import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import accountRouter from "./routes/account.mjs";

const app = express();
const api_version = process.env.API_VERSION
const api_name = process.env.API_NAME + api_version
const api_url = process.env.API_URL
const port = process.env.PORT_API

app.use(bodyParser.json());
app.use(cors());
app.use(`${api_name}/account`, accountRouter)

app.get(`${api_name}`, (req, res)=>{
    res.send("API Service for Web Absensi PPLG")
})

app.listen(port, () => {
    console.clear();
    console.log(`Server is running on port ${api_url}${api_name}`);
})