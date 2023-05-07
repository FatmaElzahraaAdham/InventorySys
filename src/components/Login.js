import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password: pass })
            });
            const data = await response.json();

            if (data.session && data.session.cookie && data.session.cookie.path) {
                // Save the session ID in local storage or state
                localStorage.setItem('sessionID', data.session.user_id);

                // Redirect the user to the appropriate page based on user type
                if (data.message === "login successful Admin") {
                    localStorage.setItem('loggedIn', "true");
                    navigate('/');
                    window.location.reload();
                } else if (data.message === "login successful Supervisor") {
                    localStorage.setItem('loggedIn', "true");
                    localStorage.setItem('warehouse_id',data.session.warehouse_id);
                    navigate('/Supervisor/products');
                    window.location.reload();

                }
            } else {
                // Display an error message to the user if session data is missing
                console.error("Session data is missing");
            }
        } catch (error) {
            console.error(error);
            // Display an error message to the user
        }
    }


    return (
        <div className="main">
            <div className="auto-form-continer">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        type="email"
                        required
                        placeholder=" your email@gmail.com"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={pass}
                        type="password"
                        required
                        placeholder=" password"
                        id="password"
                        name="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button className="submit" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
