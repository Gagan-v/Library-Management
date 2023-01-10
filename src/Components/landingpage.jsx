import { Link } from "react-router-dom";
import '../Styles/landingpage.css'
const LandingPage =()=>{
    return(
        <div className="pandingpage">
            <div className="selectlogintype">
                <h1>Library Management</h1>
                <img  src="images/logo.png" height="100px" width="100px" alt="error" />
                <Link  to='/admin-login'>Admin Login</Link>
                <img src="images/logo.png" height="100px" width="100px" alt="error" />
                <Link  to='/user-login'>USer Login</Link>
            </div>
        </div>
    )
}
export default LandingPage;