import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";



const Navigation=(props)=> {
  const[menu,toggleMenu] = useState(false)  
  const toggleClicked =()=>toggleMenu(menu =>!menu)
  const show = (menu) ? "show" : "" ;
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/my-engg-group/">
            Engineering Group Website
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation" 
            onClick={toggleClicked}>
            <span className="navbar-toggler-icon"></span>
          </button>     
          <div className={"collapse navbar-collapse " + show} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
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
                <Link className="nav-link" to="/my-engg-group/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/my-engg-group/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/my-engg-group/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="language-select">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="German">German</option>
          </select>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
