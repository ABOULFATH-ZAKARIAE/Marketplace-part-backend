const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
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
            role: {
              type: String,
              required: true,
              trim: true
            },
         
        },
        {
          versionKey: false
    }
);

const users = mongoose.model("User", Users);
module.exports = users;