import express from "express"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()



app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

const PORT = 8080
app.listen(PORT, console.log(`Server is running on port ${PORT}`))