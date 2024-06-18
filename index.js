const { error } = require('console');
const express = require('express')
const formRouter=require('./Router/formRouter')
const mongoose = require('mongoose')
const index = express();

index.use("/formUser",formRouter)

mongoose.connect(
    "mongodb://0.0.0.0:27017",
    {
        dbName: "Userform"
    }
).then(
    () => {
        
        console.log("server connect");
    }
).catch(
    (error) => {
        console.log(error);
    }
)