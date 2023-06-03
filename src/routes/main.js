const express = require('express');
const router = new express.Router();
const MensRanking = require("../models/rules.js");


router.get('/', async(req, res) => [
    res.send("This is Home Page.")
])

// save data in database 

router.post('/mens', async(req, res)=>{
    try{
        const menRecord = new MensRanking(req.body);
        console.log(req.body);
        const insertMen = await menRecord.save();
        res.status(201).send("Record save successfully.");
    } catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

// get data from database 

router.get('/mens', async(req, res)=>{
    try{
        const showRecord = await MensRanking.find({}).sort({"ranking": 1});
        console.log("Record shown successfully.");
        res.status(200).send(showRecord);
    } catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

// https://www.fruityvice.com/api/fruit/all

// get sepecific data by id from database 

router.get('/mens/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const showRecord = await MensRanking.findById(_id);
        console.log("Record shown successfully.");
        res.status(200).send(showRecord);
    } catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

// update sepecific data by id from database 

router.patch('/mens/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const showRecord = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        console.log("Record updated successfully.");
        res.status(200).send(showRecord);
    } catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

// Delete sepecific data by id from database 

router.delete('/mens/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const showRecord = await MensRanking.findByIdAndDelete(_id, req.body, {
            new: true
        });
        console.log("Record deleted successfully.");
        res.status(200).send(showRecord);
    } catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

module.exports = router;