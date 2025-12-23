
const mongoose = require('mongoose');

const connectDB = async () => {

try{

await mongoose.connect(process.env.MONGO_DB);
console.log('MongoDB connected');

}

catch(err) {

console.log(err);
console.log("error happened")


}



}


module.exports = connectDB;