import { useState } from 'react';
import '../Styles/addbooks.css'
import { useNavigate } from 'react-router-dom';
const AddBooks = () => {
    let[title,setTitle]=useState("")
    let[authors,setAuthors]=useState("")
    let[categories,setCategories]=useState("")
    let[pageCount,setPageCount]=useState("")
    let[shortDescription,setShort]=useState("")
    let[longDescription,setLong]=useState("")
    let [thumbnailUrl,setUrl]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let bookData= {title,categories,pageCount,authors,shortDescription,longDescription,thumbnailUrl}
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(bookData)
        })
        alert("added new book")
        navigate('/admin/book-list/')
    }

    return ( 
        <div className="addBooks">
            <h1>Add a Book</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form className='addbooklogin' action="">
                    <div className="title">
                        
                        <input type="text" placeholder="Title of the book" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                    </div>
                    <div className="authors">
                    <input type="text" placeholder="Authors of the book" value={authors} onChange={(e)=>setAuthors(e.target.value)} required />
                    </div>
                    <div className="categories">
                    <input type="text" placeholder="categories of the book" value={categories} onChange={(e)=>setCategories(e.target.value)} required />
                    </div>
                    <div className="pageCount">
                    <input type="text" placeholder="pageCount of the book" value={pageCount} onChange={(e)=>setPageCount(e.target.value)}required />
                    </div>
                    <div className="shortDescription">
                    <textarea placeholder="shortDescription" value={shortDescription} onChange={(e)=>setShort(e.target.value)} required></textarea>
                    </div>
                    <div className="longDescription">
                    <textarea placeholder="longDescription" value={longDescription} onChange={(e)=>setLong(e.target.value)} required></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input type="text" value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)}  />
                    </div>
                    <button>Add book</button>
                </form>
            </div>
        </div>
     );
}
export default AddBooks;
<div className="addBooks">

</div>