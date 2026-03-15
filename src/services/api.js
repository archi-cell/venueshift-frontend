import axios from "axios"

const API = axios.create({
    baseURL: "https://venueshift-backend.onrender.com/api"
})

export default API
