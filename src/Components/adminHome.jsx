import AdminNavbar from "./adminNavbar";
import { Route, Routes } from "react-router-dom";
import AdminDash from "./adminDash";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBooks from "./addBooks";
import AddUser from "./addUser";
const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDash/>}/>
                <Route path="/book-list" element={<BookList/>}/> 
                {/* path name should be same as mentioned as adminNavbar to:name */}
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                {/* :id is route parameter */}
                <Route path="/add-book" element={<AddBooks/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
            
        </div>
     );
}
 
export default AdminHome;