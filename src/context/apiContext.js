import React, { createContext, useContext, useEffect, useState } from "react";
import { addBooks, addCategories, addNotification, categoryId, getBooksByCategories, getcategories, getNews, getNotification } from "../api/api";

const apiContext = createContext()
export const ApiProvider = ({ children }) => {

        const [category,setCategory]=useState([])

        useEffect(()=>{
            const getcat=async()=>{
                try{
              const reponse=await getcategories()
               await setCategory(reponse)
              
              return category
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getcat()
    }
        ,[])
   

  
       
              const addCat=async(data)=>{
                  try{
                const reponse=await addCategories(data)
                
                
                return reponse
              }
              catch{
                  console.log('Apierreur::',console.error())
              }
          
          };
          
          const addBookss=async(data)=>{
            try{
          const reponse=await addBooks(data)
          
          return reponse
        }
        catch{
            console.log('Apierreur::',console.error())
        }
    
    };
    const [notificationn,setNotificationn]=useState([])

    const adddNotification=async(data)=>{
      try{
    const reponse=await adddNotification(data)
     await setNotificationn(reponse)
    
    return notificationn
  }
  catch{
      console.log('Apierreur::',console.error())
  }

};
const [id,setCategorybyId]=useState([])

const categoryIdd=async(data)=>{
  try{
const reponse=await categoryId(data)
 await setCategorybyId(reponse)

return id
}
catch{
  console.log('Apierreur::',console.error())
}

};

const [notification,setNotification]=useState([])
        useEffect(()=>{
            const getNotifica=async()=>{
                try{
              const reponse=await getNotification()
               await setNotification(reponse)
              
              return notification
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getNotifica()
    }
        ,[])
   
        const [booksByCategories,setbooksByCategories]=useState([])
        useEffect(()=>{
            const getcat=async()=>{
                try{
              const booksByCategories=await getBooksByCategories()
               await setbooksByCategories(booksByCategories)
              
              return booksByCategories
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getcat()
    }
        ,[])
        const [news,setNews]=useState([])

        useEffect(()=>{
            const getnew=async()=>{
                try{
              const reponse=await getNews()
               await setNews(reponse)
              
              return news
            }
            catch{
                console.log('Apierreur::',console.error())
            }
        
        };
        getnew()
    }
        ,[])
   
            
  
 
        
return(
<apiContext.Provider value={{category,addCat,addBookss,adddNotification,id,notification,booksByCategories,news}}>
        {children}
</apiContext.Provider>)
}
export const useApi=()=>{ return useContext(apiContext)}