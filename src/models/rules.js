const express = require('express');
const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const ruleSchema = new Mongoose.Schema({
    ranking: {
        type:Number,
        require:true,
        unique:true
    },
    name: {
        type:String,
        required:true,
        trim:true
    },
    dob: {
        type:Date,
        required:true,
        trim:true
    },
    country: {
        type:String,
        required:true,
        trim:true
    },
    score: {
        type:Number,
        required:true,
        trim:true
    },
    event: {
        type:String,
        default: "100m"
    }
});

// Create in new collection 
const MensRanking = new mongoose.model("MensRanking", ruleSchema)
module.exports = MensRanking;