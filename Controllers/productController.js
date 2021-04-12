const Product = require('../Models/ProductModel');






//__________________________________________________________PRODUCT ADD________________________________________________________________________

const ProductAdd = (req,res) =>{

      const title= req.body.title;
      const description= req.body.description;
      const price= req.body.price;
      const image= req.body.image;
      const quantity= req.body.quantity;
      const category= req.body.category;
      const date= new Date();
    //   LimmitePro : 10
                      const product = new Product ({
                        title,
                        description,
                        price,
                        image,
                        quantity,
                        category,
                        date
                       
                });
                product.save()
  .then(() => res.status(201).json("Product ADDED successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
  
  };

  //________________________________________________________________________Product GET_____________________________________________________________

  const getAllProduct = (req , res) => {
    Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error :" + err));
}

//___________________________________________________________________GET Product By ID_______________________________________________________________

const getProductById = (req, res) => {
  Product.findById(req.params.id)
      .then(product => {
        res.status(200).json(product);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "product not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving product with id " + req.params.id,
              error: err
          });
      });
};
//__________________________________________________________________UPDATE SELLER___________________________________________
const UpdateProduct = (req, res) => {
  Product.updateOne(
                   {_id: req.params.id},
                    {
                      title : req.body.title,
                      description : req.body.description,
                      price : req.body.price,
                      image : req.body.image,
                      quantity : req.body.quantity,
                      category : req.body.category
                    }
                  )
  .then(() => res.status(201).json("Product updated successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
}; 



  module.exports={
    ProductAdd,getAllProduct, getProductById, UpdateProduct
}
