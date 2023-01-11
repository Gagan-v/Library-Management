import '../Styles/bookList.css'
import { useNavigate,useLocation } from 'react-router-dom';
import { useState,useEffect } from "react";

const BookList = () => {
    let[books,setBooks] =useState([])
   
    let location =useLocation()
    // console.log(location.pathname);

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:4000/books')
            let data=await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])//dependency is books so it reloads if any updates or changes are done on book section
    //delete book from server
    let handledelete=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    let navigate = useNavigate()
    let read = (id)=>{
        if(location.pathname == '/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
        } else{
            navigate(`/user/book-list/${id}`)
        }
    }
    return ( 
        <div className="booklist">
            
            <h1>Book List: {books.length}</h1>
            {books.map(data=>(
                <div className="container">
                    <div className="image">
                        <img src={data.thumbnailUrl} alt="" />
                    </div>
               <div className="book_card">
                <h1>{data.title}</h1>
                <h3>Author: {data.authors}</h3>
                <h4>Categories: {data.categories}</h4>
                <h6>PageCount:{data.pageCount}</h6>
                <button className='bookdelete' onClick={()=>read(data.id)}>Read More</button>
                {location.pathname == '/admin/book-list' && <button className='bookdelete' onClick={()=>handledelete(data.id,data.title)}>Delete</button>}
                {/* location.pathname shows current path of booklist and if it satisfies the above condtion it shows button */}
               </div> 
               </div>
            ))}
        </div>
     );
}
export default BookList;