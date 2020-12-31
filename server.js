import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './config/db.js';
import productRouts from './routes/productRoute.js'
const app=express();

dotenv.config()

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))

connectDB()

app.use('/api', productRouts  )



app.get('/', (req,res)=>{
    res.send('Bismillah')
})

app.listen(5000, ()=>{
    console.log('Server Run on port 5000');
})