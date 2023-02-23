const express = require("express");
const router = express.Router();
const { Flowerm } = require("../models");

router.get("/", async (req, res) =>{
    const allFlowers = await Flowerm.findAll();
    res.json(allFlowers);
});

router.get('/:id', async (req, res) =>{

    const id = req.params.id;
    const flower = await Flowerm.findByPk(id);
    res.json(flower);
});

router.post("/:id", async (req, res)=>{
    const id = req.params.id;
    const flower = req.body;
   await Flowerm.update(
       {
           name: flower.name,
           meaning: flower.meaning,
           description: flower.description
       },
       {
           where: {id: id},
       }
   );
   res.json(flower);
});

module.exports = router;