const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const connectDB = require('./config/db');


const app = express();
const port = process.env.PORT || 3000;
// ✅ Middleware
app.use(express.json());
app.use(cors());
connectDB();


// ✅ Use routes
app.use(userRoutes);

app.listen(port, () => console.log('server running on port', port))