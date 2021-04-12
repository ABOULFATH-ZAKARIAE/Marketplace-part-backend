const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
        quantity: {
            type: Number,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        date : {
            type : String,
            required : true,
            trim : true,
        },
        // vendeur_id: {
        //     type: String,
        //     required: true,
        //     trim: true
        // }
    }
);

const product = mongoose.model("product", Product);
module.exports = product;