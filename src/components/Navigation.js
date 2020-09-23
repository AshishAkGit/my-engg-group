import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";

const Navigation=(props)=> {
  const[menu,toggleMenu] = useState(false)  
  const toggleClicked =()=>toggleMenu(menu =>!menu)
  const show = (menu) ? "show" : "" ;
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/my-engg-group/">
            Dynateq Consulting Pvt Ltd
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation" 
            onClick={toggleClicked} >
            <span className="navbar-toggler-icon"></span>
          </button>     
          <div className={"collapse navbar-collapse " + show} id="navbarResponsive">
            <ul className="navbar-nav m1">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link dropdown-toggle" to="/my-engg-group/about" data-toggle="dropdown">
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="nav-link dropdown-item" to="/my-engg-group/projectlifecycle">Project Lifecycle</Link> </li>
                  <li><Link className="nav-link dropdown-item" to="/my-engg-group/vision">Vision</Link> </li>
                  <li><Link className="nav-link dropdown-item" to="/my-engg-group/mission">Mission</Link> </li>
                  <li><Link className="nav-link dropdown-item" to="/my-engg-group/globalbusiness">Global Business Scenario</Link> </li>
                  <li><Link className="nav-link dropdown-item" to="/my-engg-group/whydynateq">Why Dynateq?</Link> </li>
                </ul>   
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/divisions" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/divisions">
                  Divisions
                </Link>                                    
               </li>
               <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/locations" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/locations">
                  Locations
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/careers" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/careers">
                  Careers
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/news" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/news">
                  News
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/contactus" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/contactus">
                  Contact Us
                </Link>
              </li>             
            </ul>
          </div>         
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
