//Import dependencies
import express from 'express';
const router = express.Router(); //Set express.Router for organization in server.mjs

//Get request for /animals
router.get('/', (req, res) => {
  res.send(`Animals List`)
})

//Get request for animals/adoption
router.get('/adoption', (req, res) => {
      res.render("adoption", { 
      title: "Adoption", 
      message: "Please Adopt Me",
      image: "/giphy.gif"
  });
})

//Post request for form button
router.post('/', (req, res) => {
  res.send(`Adoption Request Submitted`)
})

//Get request to download image
router.get('/download', (req,res) => {
  res.download("images/giphy.gif") 
})

//Dynamic parameter using :
router.get('/:id', (req, res) => { 
  console.log(req.animal)  
  res.send(`Get animal with id: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  res.send(`Update animal with id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {  
  res.send(`Delete animal with id: ${req.params.id}`)
})

//Middleware
const animals = [{ name: "Penguin" }, { name: "Dog" }, { name: "Cat" }]
router.param("id", (req, res, next, id) => {  
  console.log(req.animal)
  req.animal = animals[id]
  next()
})

//Export default 
export default router;