const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Client = new Schema(
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

        },
        {
          versionKey: false
    }
);

const client = mongoose.model("Client", Client);
module.exports = client;