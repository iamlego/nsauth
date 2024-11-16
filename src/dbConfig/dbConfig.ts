import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Mongo Connected Succesfully!");
        })
        connection.on('error', (e) => {
            console.log("Mongo DB Error");
            console.log(e);
            process.exit();
        })
    }catch(e){
        console.log("Error");
        console.log(e);        
    }
}