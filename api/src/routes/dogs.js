const { Router } = require('express');
const { getAllDogs } = require('./controllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperament} = require('../db')
const router = Router();
const axios = require('axios');
const {Sequelize, Model} = require('sequelize');
const e = require('express');



router.get('/', async (req,res) => { 
    const {name} = req.query;
    const allDogs = await getAllDogs()
    try{
        if(name) {
            const dogSelected = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()))
            if (dogSelected.length){
                return res.status(200).send(dogSelected)
            } else {
                return res.status(404).send({error: 'The dog is at the park'})
            }
        } else {
            return res.status(201).json(allDogs)
        }
    } catch(error){
        res.status(404).send({error: 'The dog is at the park'})
    }
})




router.get('/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs()
    try {
            const dogSelected = allDogs.filter((dog) => dog.id == idRaza)
            if (dogSelected.length){
                return res.status(200).send(dogSelected)
            } 
    } catch (error) {
        return res.status(404).send({error: 'The dog is at the park'})
    }
});





router.post('/', async (req,res) => {
    // try{
        let {
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            lifeTime,
            createdInDb,
            temperament,
            image
        } = req.body;

        const dogChecked = await Dog.findOne({
            where: { name: name }
        })
        if(dogChecked) {
            return res.status(404).send('The dog already exist')
        } else {
            let DogCreated = await Dog.create({
                name,
                height_min,
                height_max,
                weight_min,
                weight_max,
                lifeTime,
                createdInDb,
                image
            })

            
            temperament.forEach(async ele=>{ 
                 const tempesbs = await Temperament.findAll({ 
                    where: {name: ele},
                     })
                console.log(tempesbs)
                  await DogCreated.addTemperament(tempesbs)
                  })

                  return res.status(200).send(DogCreated)
         

          
        }
    })




module.exports = router;