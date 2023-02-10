 import './Header.css';
import Navbar from '../NavBar/Navbar';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
 const Header =()=>{
     return(
        <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to={{ pathname: "/" }}>
          <span>
                <img src="/assets/logo-2.png"/>
              </span>
          </Link>
          <Navbar />
           
          </nav>
        </div>
      </header>

     )

 }

 export default Header;