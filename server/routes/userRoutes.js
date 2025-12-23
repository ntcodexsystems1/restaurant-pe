
const express = require('express');
const router = express.Router();
const {createUser, getUsers} = require('../controllers/userController')




// ✅ Define API route to handle POST requests from React
router.post('/api/users', createUser)
 router.get('/api/users', getUsers);    // GET to fetch all



module.exports = router;
