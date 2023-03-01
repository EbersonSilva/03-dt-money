// Importação e exportação do axios. Para fazer as resuisições de URL
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000'
})