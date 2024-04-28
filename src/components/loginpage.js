
import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate(); 

    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                await axios.post('http://localhost:5000/signup', formData);
                alert('Sign up successful');
                navigate('/');
            } else {
                await axios.post('http://localhost:5000/signin', formData);
                alert('Sign in successful');
                navigate('/');
            }
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className={`container1 ${isSignUp ? 'active' : ''}`}>
            <div className="form-container sign-up">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://github.com/" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://in.linkedin.com/" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://github.com/" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://in.linkedin.com/" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
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
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details</p>
                        <button className="hidden" onClick={toggleForm}>Sign Up</button>
                        <p>Wanna hire the best talents?<br /><br /><button className="hidden"><a href="/alogin" style={{ textDecoration: 'none', color: 'white' }}>Click here</a></button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
