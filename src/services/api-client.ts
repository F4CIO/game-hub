import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'c7bb5a4db6e24f828291723c5b898b2f'
    }
})