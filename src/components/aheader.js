// src/components/Home.js
import React from 'react';
import './style.css';

import { faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginPage from './loginpage';

const AdminHeader = () => {
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
                <div class="header1">
                    <header class="header">
                        <img src={logo} alt="logo" height="60px" width="80px" />
                        <h1 class="title">Spark Tech Hub</h1>
                        <a class="signin " href="/login"><button class="sig p-1" ><h2 class="sign " >Sign In</h2>
                            <FontAwesomeIcon icon={faUser} className="ic mx-auto text-white" /></button></a>
                    </header>
                    <div class="topnav position-static">
                    <a class="links" href="/adminhome">Home</a>
                    <a class="links" href="/ajobs">Jobs Posted</a>  
                    <a class="links" href="/aabout">About</a>
                    <a class="links" href="/acontact">Contact Us</a>
                        <input class="search" type="text" placeholder="Search startups, jobs.."/>
                    </div>
                </div>
                
                
                
            
            </body>
            
        </div>
    );
}

export default AdminHeader;
