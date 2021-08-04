import axios from 'axios';
const baseURL="https://jsonplaceholder.typicode.com/";

const usuariosApi=axios.create({baseURL});

export default usuariosApi;
