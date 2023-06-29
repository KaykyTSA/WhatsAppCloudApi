import express, {Request, Response} from "express";

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    const nome = req.body.nome
    res.status(200).json({'nome': `olá ${nome}`})
})

app.listen(port, () => {
    console.log(`Server up and running in url: http://localhost:${port}`)
})