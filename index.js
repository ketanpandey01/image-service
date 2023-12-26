import express from 'express';

const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('Initial Setup')
})

app.listen(PORT, ()=>{
    console.log(`Server has started at port ${PORT}`)
})