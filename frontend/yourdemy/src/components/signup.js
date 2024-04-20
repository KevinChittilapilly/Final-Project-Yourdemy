import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [interactiveMode, setInteractiveMode] = useState(false);
    const [specialOffers, setSpecialOffers] = useState(false);
  
    const handleSignup = async (e) => {
      e.preventDefault();
      const userData = {
        full_name: fullName,
        email: email,
        password: password,
        interactive_mode: interactiveMode,
        special_offers: specialOffers,
      };
  
      try {
        const response = await axios.post("http://127.0.0.1:8000/signup/", userData);
        console.log(response.data);
        // Handle successful signup
      } catch (error) {
        console.error("Signup error:", error.response.data);
        // Handle signup error
      }
    };

    return (
        <div className="container signup">
        <h2>Sign up and start learning</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div style={{ display: "flex", flex: 1, justifyContent: "flex-start", textAlign: "start", width: "50%", marginBottom: "30px" }}>
            <label htmlFor="interactiveMode" id="interactiveModeLabel">
              Interactive Mode
            </label>
            <input
              type="checkbox"
              id="interactiveMode"
              checked={interactiveMode}
              onChange={(e) => setInteractiveMode(e.target.checked)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              id="specialOffers"
              checked={specialOffers}
              onChange={(e) => setSpecialOffers(e.target.checked)}
            />
            <label htmlFor="specialOffers">Send me special offers, personalized recommendations, and learning tips</label>
          </div>
          <br /><br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}

export default Signup;
