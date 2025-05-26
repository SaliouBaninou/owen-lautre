import axios from "axios";

const Axios = axios.create({
    baseURL: "https://back-owen-lautre.onrender.com/api/"
})

export default Axios;