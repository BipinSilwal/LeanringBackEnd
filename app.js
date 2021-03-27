const express = require('express');
require('dotenv').config();
require('./db/connectDb');

const tourRouter = require('./Routes/tourRoutes');






const port = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use('/api', tourRouter);


app.listen(port, ()=>console.log(`listening to port: ${port}`))