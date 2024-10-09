//Import dependencies
import express from 'express';
import animalRouter from './routes/animals.mjs';

//Initialize express into variable
const app = express();  
//Declare port 
const PORT = 3000;

//Server static file for template
app.use(express.static('./styles')) 
app.use(express.static('./images')) 

//Set view engine
app.set("view engine", "ejs")

//Get request for main.ejs
app.get('/', (req,res) => {
    res.render("main", { 
        title: "Animals", 
        message: "Animal Lovers"
    });
});

//Mount router to "/users" and pass router
app.use("/animals", animalRouter)

//Listen to port
app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`)
});

