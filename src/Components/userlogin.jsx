import { useNavigate } from "react-router-dom";
import '../Styles/adminLogin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let login =()=>{
        navigate('/user/')
    }
    return ( 
        <div className="adminlogin">
            <div className="form_container">
                <h1>User Login</h1>
                <div className="from_input">
                    <form onSubmit={login}>
                        <div className="email">
                        <input type="email" placeholder="Email"  />
                        </div>
                        <div className="password" >
                        <input type="password" placeholder="Password" />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
export default UserLogin;