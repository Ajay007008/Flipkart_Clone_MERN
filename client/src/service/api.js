
import axios from 'axios';

const URL = 'http://localhost:8000';


export const authenticateSignup = async (data) => {


        try{
            return await axios.post('http://localhost:8000/signup', data);
        } catch(error){
            console.log('Error while calling signup api', error);
        }



}




export const authenticateLogin = async (data) => {


    try{
        return await axios.post('http://localhost:8000/login', data);
    } catch(error){
        console.log('Error while calling login api', error);
        return error.response;
    }



}


 

