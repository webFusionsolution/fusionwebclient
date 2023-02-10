import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar =()=>{

  const openNav =()=>{
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

  const closeNav =()=>{
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }


     return(

        <div className="navbar-collapse" id="">
        <div
          className="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center mt-3"
        >
          <form className="form-inline mb-3 mb-lg-0 search-bar">
            <input type="text" className='search-input' placeholder="Search"/>
            <button
              className="btn  my-sm-0 nav_search-btn"
              type="submit"
            ></button>
          </form>
          <ul className="navbar-nav  mr-5">
            <li className="nav-item mr-5">
              <Link className='nav-link' to="/login"><span>Login</span> </Link>
              
            </li>
          </ul>
        </div>

        <div className="custom_menu-btn">
          <button onClick={openNav}>
            <span className="s-1"> </span>
            <span className="s-2"> </span>
            <span className="s-3"> </span>
          </button>
        </div>
        <div id="myNav" className="overlay">
          <div className="overlay-content" onClick={closeNav}>
          <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
     )

}

export default Navbar;