// src/components/Home.js
import React from 'react';
import './style.css';
import Jobs from './jobsposted'
import { faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import Header from './header'
import Footer from './footer'
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
import AdminHeader from './aheader'
const About2 = () => {
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
      <div class="container text-dark new6" >
        <h1 class="new7">About Spark Tech Hub</h1>
        <p>Welcome to Spark Tech Hub, where innovation meets opportunity! Founded in 2022, Spark Tech Hub is a pioneering platform designed to revolutionize the way students at VIT (Vellore Institute of Technology) connect with startups and employment opportunities on campus. Our mission is to bridge the gap between academia and industry, empowering students to explore internships and job openings within the vibrant startup ecosystem of VIT.</p>
    
        <h2 class="new7">Our Vision</h2>
        <p>At Spark Tech Hub, we envision a future where every student has access to meaningful career opportunities and every startup has access to the best talent. We strive to foster a culture of collaboration, creativity, and entrepreneurship, propelling both students and startups towards success.</p>
    
        <h2 class="new7">What Sets Us Apart</h2>
        <p>Unlike traditional job portals, Spark Tech Hub is tailored specifically for the dynamic environment of campus life. We understand the unique needs of students and startups, providing a platform that facilitates seamless connections and meaningful engagements. Whether you're a student seeking valuable work experience or a startup looking to recruit top talent, Spark Tech Hub is your go-to destination.</p>
    
        <h2 class="new7">Our Features</h2>
        <ul>
          <li><strong>Internship and Job Listings:</strong> Browse through a diverse range of internship and job opportunities offered by startups within the VIT community.</li>
          <li><strong>Startup Profiles:</strong> Explore detailed profiles of startups, learn about their missions, visions, and available positions.</li>
          <li><strong>Personalized Recommendations:</strong> Receive personalized recommendations based on your skills, interests, and career goals.</li>
          <li><strong>Networking Opportunities:</strong> Connect with fellow students and startup founders, expand your professional network, and foster collaborations.</li>
        </ul>
    
        <h2 class="new7">Join the Spark Tech Hub Community</h2>
        <p>Whether you're a student eager to kickstart your career journey or a startup seeking talented individuals to join your team, Spark Tech Hub welcomes you to join our vibrant community. Together, let's ignite innovation and unlock endless possibilities!</p>
    
        <h2 class="new7">Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:contact@sparktechhub.com">contact@sparktechhub.com</a> and let's spark a conversation.</p>
      </div>
                
                
                <Footer />
                
            
            </body>
            
        </div>
    );
}

export default About2;
