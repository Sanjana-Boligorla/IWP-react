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

const ViewInfo = () => {
    return (
        <div style={{backgroundColor: '#E7DFDD'}}>
            
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
            
                <Header />
                <br />
    <div class="container text-dark" style={{backgroundColor: '#E7DFDD'}}>
        <h1 style={{ color:'#a234CA'}}>Job Information</h1>
        <div class="job-info">
            <p><strong>Job Title:</strong> Web Developer</p>
            <p><strong>Location:</strong> Chennai, India</p>
            <p><strong>Salary:</strong> $50,000 - $70,000 per year</p>
            <p><strong>Skills Required:</strong> HTML, CSS, JavaScript, React</p>
            <p><strong>Eligibility:</strong> Bachelor's degree in Computer Science or related field</p>
        </div>
        <br />
        
        <button class="btn btn-primary new1" ><a href="./applynow" class="new2">Apply Now</a></button>
        <br />
        <br />
        <h2 class="new3">About the Company</h2>
        <br />
        <p>Spark Tech Hub is a pioneering platform designed to revolutionize the way students at VIT (Vellore Institute of Technology) connect with startups and employment opportunities on campus. Founded in 2022, our mission is to bridge the gap between academia and industry, empowering students to explore internships and job openings within the vibrant startup ecosystem of VIT.</p>
        <p>At Spark Tech Hub, we believe in fostering a culture of collaboration, creativity, and entrepreneurship. Join us in our mission to ignite innovation and unlock endless possibilities!</p>
    </div>
                <Footer />
                
            
            
            
        </div>
    );
}

export default ViewInfo;
