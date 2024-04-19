import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="home.html" style={{ color: 'blueviolet', fontSize: '25px' }}>YourDemy</a></li>
          <li><a href="feedback.html">Feedback</a></li>
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
            <span id="userid">
              <li><a href="login.html">Login</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </span>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
