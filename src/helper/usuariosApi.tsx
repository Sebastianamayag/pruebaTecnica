import axios from 'axios';
const baseURL="http://localhost:4000/";

const usuariosApi=axios.create({baseURL});

export default usuariosApi;
