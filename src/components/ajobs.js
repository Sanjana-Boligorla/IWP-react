// src/components/Home.js
import React from 'react';
import './style.css';
import Jobs from './jobsposted'
import { faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import Header from './header'
import Footer from './footer'
import './bootstrap.min.css';
import icon1 from './icon1.jpg'
import logo from './logo1.jpg';
import icon2 from './icon2.jpg'
import icon6 from './icon6.png'
import icon5 from './icon5.png'
import comp2 from './comp2.png'
import { Carousel } from 'bootstrap';
import car from './car3-Photoroom.png-Photoroom.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import AdminHeader from './aheader';
const Ajobs = () => {
    return (
        <div>
            
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
                <link rel="stylesheet" href="style.css"/>
                <link rel="stylesheet" href="bootstrap.min.css"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> 
                <script src="https://kit.fontawesome.com/e87872cc68.js" crossorigin="anonymous"></script>
                
            </head>
            <body class="bg-black">
                <AdminHeader />
                
                
                <Jobs />
                <Footer />
                
            
            </body>
            
        </div>
    );
}

export default Ajobs;
