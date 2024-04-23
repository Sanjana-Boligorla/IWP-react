// src/components/Home.js
import React from 'react';
import './style.css';

import { faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';

import icon1 from './icon1.jpg'
import logo from './logo1.jpg';
import icon2 from './icon2.jpg'
import icon6 from './icon6.png'
import icon5 from './icon5.png'
import comp2 from './comp2.png'

import car from './car3-Photoroom.png-Photoroom.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
                <link rel="stylesheet" href="style.css"/>
            
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> 
                <script src="https://kit.fontawesome.com/e87872cc68.js" crossorigin="anonymous"></script>
                
            </head>
            <body class="bg-black">
                
                <footer class="bg-dark">
                    <br />
                    <h4 class="text-center services">Our Services</h4>
                    
                    <div class="d-flex align-items-center justify-content-evenly">
                    <div class="card card1 w-20 bg-black h-20 card1 p-2 m-2 rounded-5">
                        <h5 class="service text-center">24/7 Customer support available</h5>
                        <img src={icon1} class="servimg" />
                    </div>
                    <div class="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
                        <h5 class="service text-center">Personalized Recommendations</h5>
                        <img src={icon2}  height="120px" width="120px" class="mx-auto" />
                    </div>
                    <div class="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
                        <h5 class="service text-center">Feedback and Mentorships</h5>
                        <img src={icon6}  height="120px" width="120px" class="mx-auto" />
                    </div>
                    <div class="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
                        <h5 class="service text-center">Resume Building Workshops</h5>
                        <img src={icon5}  height="120px" width="120px" class="mx-auto" />
                    </div>
                    </div>
                    <br />
                    <div class="row bg-black">
                    <div class="col-3 p-5 foot1">
                        
                        <p><strong>Contact</strong></p>
                        <p><strong>Address: </strong> 5, Mount Road Chennai-115</p>
                        <p><strong>Phone: </strong>9878998790</p>
                        <p><strong>Follow Us</strong></p>
                        <div class="icon">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    </div>
                    <div class="col-3 p-5 foot1">
                        <p><strong>&ensp;About</strong></p>
                        <p><a href="#" class="footlinks">About us</a></p>
                        
                        <p><a href="#" class="footlinks">Privacy Policy</a></p>
                        <p><a href="#" class="footlinks">Terms & Conditions</a></p>
                        <p><a href="#" class="footlinks">Contact Us</a></p>
                    </div>
                    <div class="col-3 p-5 foot1">
                        <p><strong>&ensp;My Accout</strong></p>
                        <p><a href="#" class="footlinks">About</a></p>
                        <p><a href="#" class="footlinks">Sign In</a></p>
                        <p><a href="#" class="footlinks">View Jobs</a></p>
                        
                        <p><a href="#" class="footlinks">Help</a></p>
                    </div>
                    <div class="col-3 p-5 foot1">
                        <p><strong>Install App</strong></p>
                        <p>From app store or Google play</p>
                        
                        <FontAwesomeIcon icon={faAppStore} />
                        &ensp;&ensp;
                        <FontAwesomeIcon icon={faGooglePlay} />
                        <br /><br />
                        <p>Secured Payments</p>
                        <i><FontAwesomeIcon icon={faCcPaypal} /></i>
            <i><FontAwesomeIcon icon={faGooglePay} /></i>
            <i><FontAwesomeIcon icon={faApplePay} /></i>
            <i><FontAwesomeIcon icon={faAmazonPay} /></i>
            <i><FontAwesomeIcon icon={faPaypal} /></i>
                    </div>
                    </div>
                </footer>
                
            
            </body>
            
        </div>
    );
}

export default Footer;
