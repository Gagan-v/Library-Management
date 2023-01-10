import { Link } from "react-router-dom";
import '../Styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="main">
            <h1>AdminPortal</h1>
            <div className="navbar">
                <li><Link to="/admin/">DashBoard</Link></li>
                <li> <Link to="/admin/add-book">Add Books</Link></li>
                <li> <Link to="/admin/add-user">Add User</Link></li>
                <li><Link to="/admin/book-list">Book List</Link></li>
                <li><Link to="/admin/user-list">User List</Link></li>
                <li><Link to="/">Log Out</Link></li>
            </div>
            </div>
        </div>
     );
}
export default AdminNavbar;