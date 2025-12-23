
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({


    orderName: {

        type: String,
        required: true,
        trim: true
    },

    tableNo: {

        type: String,
        required: true,
        trim: true

    }

})

const User = mongoose.model('resData', userSchema);

module.exports = User;



