import React from "react";

function Login() {
    return (
        <div className="container login">
            <h2>Login to YourDemy</h2>
            <form id="login-form">
                <input type="email" id="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
