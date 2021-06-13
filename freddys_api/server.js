const express = require('express');
const cors = require('cors');
const routes = require('./routes');




const PORT = process.env.PORT || 4000;
const app = express();
require('dotenv').config();


// middleware - JSON parsing
app.use(express.json());
app.use(cors());


// middleware - API routes
app.use('/api/v1/guitars', routes.guitars);
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/user', routes.user);



// connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

