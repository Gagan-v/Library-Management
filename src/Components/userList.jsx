import '../Styles/userList.css'
import { useState,useEffect } from "react";
const UserList = () => {
    let[user,setUser]=useState([])
    useEffect(()=>{
        let featchData=async()=>{
            let response= await fetch('http://localhost:4000/users')
            let data=await response.json()
            setUser(data)
        }
        featchData()
    },[])
    let handledelete=(id,name)=>{
        setUser(user.filter(x=>x.id !==id))
        alert(`${name} is removed`)
    }
    return ( 
        <div className="userlist">
            <h1>User List: {user.length}</h1>
            {user.map(data=>(
                <div className="user_card">
                    <h2>UserName: {data.name}</h2>
                    <h3>Age: {data.age}</h3>
                    <h3>Email: {data.email}</h3>
                    <h3>Phone: {data.phoneNumber}</h3>
                    <button onClick={()=>handledelete(data.id,data.name)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
export default UserList;