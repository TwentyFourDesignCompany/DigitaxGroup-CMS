const mongoose = require('mongoose');

const dbConnection = async()=>{
   let connection = await mongoose.connect(`mongodb+srv://contractprojects2022:5QsirHkDPze53aZ@digitax.wmku2.mongodb.net/?retryWrites=true&w=majority&appName=digitax`)
   if(connection){
    console.log(`connected`)
   }
   else{
    console.log(`not connected`)
   }
}

module.exports = dbConnection
