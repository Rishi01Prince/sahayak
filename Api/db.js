const mongoose = require('mongoose')
const mongoURI = process.env.DATABASE.replace('<USERNAME>' , process.env.DATABASE_USERNAME).replace('<PASSWORD>' , process.env.DATABASE_PASSWORD);


const mongoDB = async () => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
        }, connect);
    }
    catch(err){
        console.log(err);
    }
    
};

