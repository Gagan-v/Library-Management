import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/adminLogin.css'
const AdminLogin=()=>{
    let [email,setemail]=useState('')//default value of usestate is empty string
    let [password,setpassword]=useState('')
    let navigate=useNavigate()

    let login=(e)=>{
        e.preventDefault();
       let data={email,password}
       if(email=='admin@gmail.com' && password==1234)
        {
            navigate('/admin/')
        }
        else{
            alert("Invalid Credentials")
        }
    }
    return(
        <div className="adminlogin">
            <div className="form_container">
                <h1>Login as Admin</h1>
                <div className="from_input">
                    <form onSubmit={login}>
                        <div className="email">
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email address" />
                        </div>
                        <div className="password">
                            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;