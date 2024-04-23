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
import AdminHeader from './aheader.js'
import car from './car3-Photoroom.png-Photoroom.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const AContact = () => {
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
            <body class="new6">
                <AdminHeader />
                <br />
    <div class="container text-dark">
        <h1 class="new7">Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions, feedback, or partnership inquiries, feel free to reach out to us using the contact details below:</p>

        <h2 class="new7">Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:contact@sparktechhub.com">contact@sparktechhub.com</a></p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>Address:</strong> 123 Tech Street, Innovation City, Vellore, India</p>
    <br />
        <center>
        <div class="rounded-5 shadow bg-white p-5 new8" >
                 <h2 class="new7" >Send Us a Message</h2>
        <form action="#" method="POST">
            <div class="mb-3">
                <h6 class="new9"><label for="name" class="form-label" class="new10">Your Name</label></h6>
                <input type="text" class="form-control" id="name" name="name" required />
            </div>
            <div class="mb-3">
                <h6 class="new9"><label for="email" class="form-label" class="new9">Your Email</label></h6>
                <input type="email" class="form-control "   id="email" name="email" required />
            </div>
            <div class="mb-3">
                <h6 class="new9"><label for="message" class="form-label">Message</label></h6>
                <textarea class="form-control"  id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary new11">Send Message</button>
        </form>
       
        </div>
        <br />
    </center>
    </div>
                <Footer />
                
            
            </body>
            
        </div>
    );
}

export default AContact;
