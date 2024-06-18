const express = require('express');
const form =require('../modles/form')
formRouter = express.Router();
// const formcontrollers =require('../Controllers/formcontrollers')

// formRouter.post(
//     "/create-account",
//     (req, res) => {
//         const respose = new form().createAccount(req.body);
//         respose.then(
//             (sucesss) => {
//                 res.send(sucesss);
//             }
//         ).catch(
//             (error) => {
//                 console.log("hello");
//                 res.send(error);
//             }
//         )

//     }
// )
module.exports = formRouter;