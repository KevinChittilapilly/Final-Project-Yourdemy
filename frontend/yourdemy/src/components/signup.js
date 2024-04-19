import React from "react";

function Signup() {
    return (
        <div className="container signup">
            <h2>Sign up and start learning</h2>
            <form id="signupForm">
                <input type="text" id="fullName" placeholder="Full Name" required />
                <input type="email" id="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', textAlign: 'start', width: '50%', marginBottom: '30px' }}>
                    <label htmlFor="interactiveMode" id="interactiveModeLabel">Interactive Mode</label>
                    <input style={{ width: 'fit-content', marginTop: 'auto', marginBottom: 'auto' }} type="radio" id="interactiveMode" name="interactiveMode" />
                </div>
                <div style={{ display: 'flex' }}>
                    <input type="checkbox" id="specialOffers" name="specialOffers" />
                    <label htmlFor="specialOffers">Send me special offers, personalized recommendations, and learning tips</label>
                </div>
                <br /><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
