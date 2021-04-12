const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Vendeur = require('../Models/VendeurModel');


//_______________________  authentication________________________

const Sellersignup = (req, res) =>{
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
                const identité_fiscale = req.body.identité_fiscale;
                const status = req.body.status;
                const vendeur = new Vendeur ({
                        firstName,
                        lastName,
                        phone,
                        email,
                        login,
                        password,
                        identité_fiscale,
                        status
                });
                vendeur
                .save()
                .then(()=> res.json("Your requist on Progress"))
                .catch((err) => res.status(400).json("Error :" +err));
        })
}

//____________________________________________________________________login___________________________________________________________

const Sellerlogin = (req, res) => {

        let login = req.body.login;
        let password = req.body.password
    
        Vendeur.findOne({login: login})
        .then(vendeur => {
                if(vendeur){
                        bcrypt.compare(password,vendeur.password, function(err, result){
                                if(err) {
                                        res.json({
                                                error: err
                                        })
                                }
                                if(result) {
                                        if(vendeur.status == "Inactive"){
                                                res.json({
                                                  status: 'Inactive'
                                                  })
                                            }
                                            else if(vendeur.status == "Block"){
                                              res.json({
                                                status: 'Block'
                                                })
                                          }
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

    //___________________________________________ALL Seller____________________

    const getAllVendeur = (req , res) => {
        Vendeur.find()
        .then((vendeur) => res.json(vendeur))
        .catch((err) => res.status(400).json("Error :" + err));
    }
//_______________________________________________________________GET SELLER BY ID__________________________________________________________________________

const getVendeurById = (req, res) => {
        Vendeur.findById(req.params.id)
            .then(vendeur => {
              res.status(200).json(vendeur);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Seller not found with id " + req.params.id,
                        error: err
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving Seller with id " + req.params.id,
                    error: err
                });
            });
      };
//__________________________________________________________________UPDATE SELLER___________________________________________
const updateVendeur = (req, res) => {
        // Find Seller By ID and update it
        Vendeur.updateOne(
                         {_id: req.params.id},
                          {
                            status : req.body.status,
                        //     type : req.body.type
                          }
                        )
        .then(() => res.status(201).json("Seller updated successfully"))
        .catch((err) => res.status(400).json("Error :" + err));
      }; 

module.exports={
        Sellersignup, Sellerlogin, getAllVendeur,getVendeurById,updateVendeur,getVendeurById
}