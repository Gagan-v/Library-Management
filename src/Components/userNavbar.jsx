import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
         <div className="adminnavbar">
            <div className="main">
            <h1>UserPortal</h1>
            <div className="navbar">
                <li><Link to="/user/">DashBoard</Link></li>
                <li><Link to="/user/book-list">Book List</Link></li>
                <li><Link to="/">Log Out</Link></li>
            </div>
            </div>
        </div>
     );
}
 
export default UserNavbar;