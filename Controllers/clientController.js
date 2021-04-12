const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Client = require('../Models/clientModel');


//_______________________  authentication________________________

const Clientsignup = (req, res) =>{
        bcrypt.hash(req.body.password, 10, function(err,hashPassword) {
                if(err) {
                        res.json({error : err})
                }

                const firstName = req.body.firstName;
                const lastName = req.body.lastName;
                const phone = req.body.phone;
                const email = req.body.email;
                const login = req.body.login;
                const password = hashPassword;
                const client = new Client ({
                        firstName,
                        lastName,
                        phone,
                        email,
                        login,
                        password,
                });
                client
                .save()
                .then(()=> res.json("You've been added seccessufully"))
                .catch((err) => res.status(400).json("Error :" +err));
        })
}

//____________________________________________________________________login___________________________________________________________

const Clientlogin = (req, res) => {

        let login = req.body.login;
        let password = req.body.password
    
        Client.findOne({login: login})
        .then(client => {
                if(client){
                        bcrypt.compare(password,client.password, function(err, result){
                                if(err) {
                                        res.json({
                                                error: err
                                        })
                                }
                                if(result) {
                                        
                                        let token =jwt.sign({login: login}, 'ABOULFATHkey', (err, token) =>{
                                                res.json({
                                                 token
                                                })
                        })
                }else {
                        res.json({
                                message : 'password incorrect try again'
                        })
                }
        })
    
        }else {
                res.json({
                        message : 'Login not Found'
                })
        }
    }).catch((err) => res.status(400).json("Error :"+ err))
    
    }

    module.exports={
        Clientsignup,Clientlogin
}
