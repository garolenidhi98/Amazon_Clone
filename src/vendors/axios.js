import axios from "axios";
  
const instance = axios.create({
    baseURL:"https://us-central1-amaznclone-v1.cloudfunctions.net/api" //THR API (cloud function )URL
});

export default instance;

//"http://127.0.0.1:5001/demo-amazon-clone/us-central1/api"