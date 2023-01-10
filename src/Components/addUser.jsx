import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let[phoneNumber,setPhone]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let userData={name,age,email,phoneNumber}
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(userData)
        })
        alert("user added")
        navigate('/admin/user-list/')
    }
    return ( 
        <div className="adduser">
            <h1>Add a user</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" required/>
                    </div>
                    <div className="age">
                    <input type="number" value={age} max={100} min={15} onChange={(e)=>setAge(e.target.value)} placeholder="Enter age" required/>
                    </div>
                    <div className="email">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required/>
                    </div>
                    <div className="phone">
                    <input type="tel" value={phoneNumber} minLength={10} maxLength={10} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone" required/>
                    </div>
                    <button>Add user</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;