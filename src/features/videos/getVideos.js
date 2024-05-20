//import axios from "axios"
// import { api } from "../../api/api"

// export const getVideos = async ()=> {
//     const {data} =await api.get("/videos")
//     return data
// }
import { api } from "../../api/api"

export const getVideos = async ()=>{
     const res = await api.get("/videos")
     return res
}