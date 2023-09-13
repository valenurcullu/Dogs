const {Router} = require("express")
const {Dog, Temperament} = require("../db")
const axios = require('axios');
const router = Router();
const {API_KEY} = process.env;


router.get('/', async (req,res) => {
    try {
           const api = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
           const perros = await api.data.map (el => el.temperament)
           let perrosSplit = await perros.join().split(',')
           let perrosTrim = await perrosSplit.map(e => e.trim())
           await perrosTrim.forEach( async (e) => {
               if(e.length > 0){
                   await Temperament.findOrCreate({
                       where : {name : e}
                   })
               }
           })
           const allTemperament = await Temperament.findAll()
           // console.log(allTemperament)
           return res.status(200).json(allTemperament)
       }catch (error){
            res.status(404).send({error: 'There are not temperaments'})
        }
   })



module.exports = router;