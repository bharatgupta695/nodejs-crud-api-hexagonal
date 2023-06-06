const app = require("./common/setup/app");

const dotenv  = require("dotenv");
const connectDatabase = require("./common/setup/databaseConnection");

//Handling Uncaught Exception 
process.on("uncaughtException", (err) =>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});


//config
dotenv.config({path:"./config/config.env"});

connectDatabase();

const server = app.listen(process.env.PORT,() => {
    
    console.log(`Server is working on http://localhost:${process.env.PORT} `);
})

// Unhandled Promise Rejection
process.on("unhandledRejection",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");

    server.close(() =>{
        process.exit(1);
    });
});