const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, {

    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true


}).then(()=>console.log("Database connection successful!!!"));