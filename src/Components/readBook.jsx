import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
    
    let[book,setBook]=useState([])
    let param =useParams()
    
    //to get route parameter
    useEffect(()=>{
        let fetchData =async()=>{
            let response=await fetch(`http://localhost:4000/books/${param.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="readBook">
            <h3>{book.shortDescription}</h3>
            <p>{book.longDescription}</p>
        </div>
     );
}
export default ReadBook;