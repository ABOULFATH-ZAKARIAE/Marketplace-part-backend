const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/UsersModel');


//_______________________ authentication________________________

const signUp = (req, res) =>{
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
                const role = req.body.role;
                

                const user = new User ({
                        firstName,
                        lastName,
                        phone,
                        email,
                        login,
                        password,
                        role
                       
                });
                user
                .save()
                .then(()=> res.json("User added"))
                .catch((err) => res.status(400).json("Error :" +err));
        })
}
//_________________________________________Login_____________________________________

const login = (req, res) => {

    let login = req.body.login;
    let password = req.body.password

    User.findOne({login: login})
    .then(users => {
            if(users){
                    bcrypt.compare(password,users.password, function(err, result){
                            if(err) {
                                    res.json({
                                            error: err
                                    })
                            }
                            if(result) {
                                    let token =jwt.sign({login: login}, 'ABOULFATHkey', (err, token) =>{
                                            res.json({
                                             token,
                                             role: users.role
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

//______________________________________________Get All Users_______________________________________________

const getAllUsers = (req , res) => {
    User.find( {role: "ADMIN"})
    .then((admin) => res.json(admin))
    .catch((err) => res.status(400).json("Error :" + err));
}
//__________________________________________get super admin___________________________________

const getSuperAdmin = (req , res) => {
        User.find( {role: "SUPERADMIN"})
        .then((admin) => res.json(admin))
        .catch((err) => res.status(400).json("Error :" + err));
    }


module.exports={
    signUp, login, getAllUsers, getSuperAdmin
}
