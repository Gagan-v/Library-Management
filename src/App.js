import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LandingPage from './Components/landingpage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userlogin';
import AdminHome from './Components/adminHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
