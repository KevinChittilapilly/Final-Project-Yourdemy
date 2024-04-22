import React from "react";

function MenuHeader(props) {
  const interactiveMode = props.userData?.interactive_mode||false
  return (
    <div className="menu-header-div">
      {console.log(props.userData)}
      <span class="material-symbols-outlined" onClick={()=>props.handleMenuOpen()} >close</span>
      <div className="right-items">
        <>
          <h3>Menu</h3>
          <div id="interactive-mode">
            <a>Interactive Mode</a>
           {interactiveMode?<span className="material-symbols-outlined"> toggle_on </span>:<span className="material-symbols-outlined"> toggle_off </span>} 
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <a onClick={() => props.onHeaderClick("feedback")}>Feedback</a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="material-symbols-outlined"> shopping_cart </span>
          </div>
          {props.isAuthenticated?
          
          <span id="userid">
             {sessionStorage.getItem("userEmail")}
            </span>
          :<span id="userid">
            <div>
              <a onClick={() => props.onHeaderClick("login")}>Login</a>
            </div>
            <div>
              <a onClick={() => props.onHeaderClick("signup")}>Sign Up</a>
            </div>
          </span>}
        </>
      </div>
    </div>
  );
}

export default MenuHeader;
