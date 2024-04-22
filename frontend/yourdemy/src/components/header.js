import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMobile from "../hooks/useMobile";
import MenuHeader from "./menuHeader";

function Header() {
  const navigate = useNavigate()
  const isMobile = useMobile();
  const [menuOpen,setMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }
  const isAuthenticated = sessionStorage.getItem("isAuthenticated")
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  const onHeaderClick = (link) =>{
    setMenuOpen(false)
    navigate("/"+link)
  }
  if (isMobile) {
    return (
      <header>
        <nav>
          <ul>
            <div className="menu-div">
              <li>
                <a
                  onClick={() => onHeaderClick("home")}
                  style={{ color: "blueviolet", fontSize: "25px" }}
                >
                  YourDemy
                </a>
              </li>
              <span class="material-symbols-outlined" onClick={()=>handleMenuOpen()}>menu</span>
            </div>

            <div className="search-container">
              <input type="text" placeholder="Search.." name="search" />
            </div>
          </ul>
        </nav>
        {menuOpen && <MenuHeader userData={userData} isAuthenticated={isAuthenticated} handleMenuOpen={handleMenuOpen} onHeaderClick={onHeaderClick}/>}
      </header>
    );
  }
  return (
    <header>
      <nav>
        <ul>
          <li><a onClick={()=>onHeaderClick('home')} style={{ color: 'blueviolet', fontSize: '25px' }}>YourDemy</a></li>
          <li><a onClick={()=>onHeaderClick('feedback')}>Feedback</a></li>
          <div className="search-container">
            <input type="text" placeholder="Search.." name="search" />
          </div>
          <div className="right-items">
            <li id="interactive-mode">
              <a>Interactive Mode</a>
              <span className="material-symbols-outlined"> toggle_off </span>
            </li>
            <li>
              <span className="material-symbols-outlined"> shopping_cart </span>
            </li>
            {!isAuthenticated && (<span id="userid">
              <li><a onClick={()=>onHeaderClick('login')}>Login</a></li>
              <li><a onClick={()=>onHeaderClick('signup')}>Sign Up</a></li>
            </span>)}
            {isAuthenticated && (
              <span id="userid">
              <li><label>{sessionStorage.getItem("userEmail")}</label></li>
            </span>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
