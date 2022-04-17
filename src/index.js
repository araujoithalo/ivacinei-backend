import cors from 'cors' //
import dotenv from 'dotenv'
import express from 'express' //api rest
import helmet from 'helmet' //helps express to get more secure
import morgan from 'morgan'

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to iVacinei' });
})

app.listen(PORT, () => {
    console.log(PORT)
})