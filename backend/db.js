// connecting with mongoDB

const mongoose = require("mongoose");


const mongoURI = "mongodb://localhost:27017/";


const connectToMongo = async () => {
    mongoose.connect(mongoURI)
        .then((result) => {
            console.log('connected to Mongodb');
        }).catch((err) => {
            console.error(err);
        });
}

module.exports = connectToMongo;