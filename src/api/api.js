import Axios from "axios";


export const api = Axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar= async (url,setData)=>{
    const respuesta = await api.get(url);
    setData(respuesta.data)
}
