const express = require('express');
const app = express();
const path = require('path');
const statice_path = path.join(__dirname, "./Public")
const form = require('../backend/modles/form')
require('../backend/index')

// console.log(path.join(__dirname,"./Public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(statice_path))

app.post(
    "/create-account",
    async (req, res) => {
        try {
            const userregister= new form(
                {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    Mobile_No: req.body.mobileno,
                    Email_Id: req.body.emailid,
                    Street: req.body.street,
                    City: req.body.city,
                    State: req.body.state,
                    country: req.body.country,
                    Login_id: req.body.Login_id,
                    password: req.body.password,
                }
            )
            userregister.save()
        } catch (error) {
            console.log("hello");
            console.log(error);
        }
    }

)
app.listen(1800, () => {
    console.log(`Frontend  is running ${1800}`);
}
)