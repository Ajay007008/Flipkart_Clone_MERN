import mongoose from "mongoose";

export const Connection = async (username, password) => {

const URL = `mongodb+srv://${username}:${password}@ecommerce-web.wemnm9f.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;

    try {
            await mongoose.connect(URL,{
                dbName: "test"
            });
                console.log('Database connected Successfully');
        }   catch (error){
        console.log('Error while connecting with the database',error.message);
    }

}

export default Connection; 

