import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true  // Habilita el envío de cookies o credenciales si es necesario
});

export default clienteAxios;
