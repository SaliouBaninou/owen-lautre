import Axios from "./Axios"

export async function getFiles(){
    const req = await Axios.get('imagekit/files')
    return req.data
}
