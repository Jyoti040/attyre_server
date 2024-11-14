require('dotenv').config()
const cors = require("cors")

const express = require('express')
const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true 
}))

app.use(express.json())

const apiData = require('../dummyData')
// app.set("view engine","ejs") //have to verify this

const port = process.env.PORT || 3000

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`The server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start()

app.get('/',(req,res)=>{
    res.send("Welcome to Attyre backend")
})

app.post('/generate-palette',(req,res)=>{
    const {skin , eye , hair , colorIntensityPreference ,
        seasonalPreference,
        occasionPreference,
        personalPreference,
        undertone
    } = req.body

    console.log('in generate palette ' , req.body )
    res.status(200).json({
        status : 'success',
        palette:apiData
    })
})

module.exports = app;