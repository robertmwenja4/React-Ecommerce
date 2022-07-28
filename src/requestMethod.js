import axios from "axios";


const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGM0Y2EyMDFhZWIwYWZiNWMzNzYxOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTAwMTgyMywiZXhwIjoxNjU5MjYxMDIzfQ.4H6CUemy1nn8hFH-dSl-gdXnwZBcqetG-BorVaEaXWU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});