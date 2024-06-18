const express = require('express');
const formRouter = require('../Router/formRouter');
const form = require('../modles/form');


// class formcontrollers {
//     createAccount(data) {
//         return new Promise(
//             (res, rej) => {
//                 try {
//                     const formuser = new form({
//                         firstname: data.firstname,
//                         lastname: data.lastname,
//                         Mobile_No: data.mobileno,
//                         Email_Id: data.emailid,
//                         Street: data.street,
//                         City: data.city,
//                         State: data.state,
//                         country: data.country,
//                         Login_id:data.loginid,
//                         password: data.Password,
//                     });
//                     formuser.save()
//                         .then(

//                             (success) => {
//                                 res(
//                                     {
//                                         msg: "user Created"
//                                     }
//                                 )
//                             }
//                         ).catch(
//                             (error) => {
//                                 res(
//                                     {
//                                         msg: "user not created"
//                                     }
//                                 )

//                             }
//                         )

//                 } catch (error) {
//                     console.log("error");
//                     rej(
//                         {
//                             msg: "Internal Server Error ",
//                             status: 0
//                         }
//                     )
//                 }
//             }
//         )
//     }
// }
module.exports = formcontrollers;