import axios from "axios";


const BASE_URL = "http://localhost:5000/api";
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGM0Y2EyMDFhZWIwYWZiNWMzNzYxOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTY2NjA4OSwiZXhwIjoxNjYxOTI1Mjg5fQ.iuPsiKrH9qBf0jVWzNU-yzuZTTorxr8_K8IdvLJ_DEI";
if (TOKEN === null) {
    console.log("Empty token");
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});