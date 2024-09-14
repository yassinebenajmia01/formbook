import axios from "axios"
const BASE_URL = "http://localhost:8000/v1"; 

export const  getcategories=async()=> {

    try{
    const reponse=await axios.get(`${BASE_URL}/Categorie/get`)
    console.log("first cat",reponse)
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }



}
export const  addCategories=async(data)=> {
    try{
  const reponse=  await axios.post(`${BASE_URL}/addCategories`,data)

    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }



}
export const  addBooks=async(data)=> {
    try{
    const reponse=await axios.post(`${BASE_URL}/categories/${categoryId}/addBooks`,data)
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }



}
export const  getNotification=async()=> {
    try{
    const reponse=await axios.get(`${BASE_URL}/notifications/${BASE_URL}/notifications/get-Notification`)
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }



}
export const  addNotification=async(data)=> {
    try{
    const reponse=await axios.post(`${BASE_URL}/notifications/add-Notification`,data)
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }



}
export const  categoryId=async(data)=> {
    try{
    const reponse=await axios.post(`${BASE_URL}/add-book/${categoryId}`,data)
    return reponse.data}
    catch{
        console.log('Apierreur',console.error())
    }



}

// export const  confirm=async()=> {
//     try{
//     const reponse=await axios.post(${BASE_URL}/${orderId}/confirm)
//     return reponse.data}
//     catch{
//         console.log('Apierreur',console.error())
//     }



// }
export const getBooksByCategories=async(categoryId)=>{
    try {
      const res= await axios.get(`${BASE_URL}/Category/categories/${categoryId}/book`)


      return res.data}
      catch(error){
            console.error("erreur")
      }
    }
    export const  getNews=async()=> {

        try{
        const reponse=await axios.get(`${BASE_URL}/books/books`)
        console.log("first",reponse)
        return reponse.data}
        catch{
            console.log('Apierreur',console.error())
        }
    
    
    
    }
