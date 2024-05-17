import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()



app.get('/api',(req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

const port = process.env.PORT || 8080
app.listen(port, console.log(`Server is running on port ${port}`))