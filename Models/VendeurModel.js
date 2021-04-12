const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Seller = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
          },
      
          lastName: {
              type: String,
              required: true,
              trim: true,
            },
            phone: {
                type: Number,
                required: true,
                trim: true,
            },
            email: {
                type: String,
                required: true,
                trim: true,
            },
      
            login: {
              type: String,
              required: true,
              trim: true,
            },
            password: {
              type: String,
              required: true,
              trim: true,
            },
            
            identité_fiscale: {
                type: String,
                required: true,
                trim: true
            },
            status: {
              type: String,
              required: true,
              default: 'Inactive',
              trim: true
            },
            type: {
              type: String,
              default: 'Starter',
              trim: true
            }

        },
        {
          versionKey: false
    }
);

const seller = mongoose.model("Vendeur", Seller);
module.exports = seller;