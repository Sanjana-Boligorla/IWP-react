import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className={`container1 ${isSignUp ? 'active' : ''}`}>
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://github.com/" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://in.linkedin.com/" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://github.com/" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://in.linkedin.com/" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details</p>
                        <button className="hidden" onClick={toggleForm}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hire the Elite to build something Extraordinary!</h1>
                    <p>Register with your personal details</p>
                        <button className="hidden" onClick={toggleForm}>Sign Up</button>
                        <p>Looking for Job Opportunities?<br /><br /><a href="/login" style={{ textDecoration: 'none', color: 'white' }}>Click here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
