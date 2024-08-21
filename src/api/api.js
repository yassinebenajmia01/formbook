import axios from "axios"


export const  getBooks=async()=> {
    try{
    const reponse=await axios.get('2gNOpRwJLeFzvjT6gBk6rSrryyyA6GTgjtLaNWFlFbSCb4nypNqcbpmoKIGPkkdi')
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    };