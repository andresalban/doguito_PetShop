import Axios from "axios";


export const api = Axios.create({
    baseURL: "https://api-doguito.vercel.app"
})

export const buscar= async (url,setData)=>{
    const respuesta = await api.get(url);
    setData(respuesta.data)
}
