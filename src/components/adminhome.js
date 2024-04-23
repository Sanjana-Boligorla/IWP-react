// src/components/Home.js
import React from 'react';
import './style.css';
import bg1 from './bg1.jpg'
import r from './recruit2.png'
import { faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import Header from './header'
import AdminHeader from './aheader'
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

const AdminHome = () => {
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
                <div id="carouselExample" class="carousel slide bg-black" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={bg1}  class="car d-block w-75" alt="..." data-bs-interval="3000"/>
                        <div class="centered text-black"><p class="text1 text-center">DREAM. DISCOVER. DELIVER</p></div>
                    
                    </div>

                    <div class="carousel-item">
                        <img src={bg1} class="car d-block w-75" alt="..." data-bs-interval="3000" />
                        <div class="centered text-black"><p class="text1 text-center">EMPOWERING STUDENTS.<br /> FUELING STARTUPS.</p></div>
                    
                    </div>
                    <div class="carousel-item">
                        <img src={bg1} class="car d-block w-75" alt="..." data-bs-interval="3000" />
                        <div class="centered text-black"><p class="text1 text-center">BUILDING BRIDGES BETWEEN TALENT AND OPPORTUNITY</p></div>
                    
                    </div>
                    <div class="carousel-item">
                        <img src={r} class="car d-block w-75" alt="..." data-bs-interval="3000" />
                        <div class="centered text-black"><p class="text1 text-center"></p></div>
                    
                    </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden ">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="bgd"> 
                    <br />
                    <h2 class="text-center mov text-white ">Advertise Your Openings</h2>
                    <div class="container">
                      <div class="box">
                          <h1  > Post Your Job
                          </h1>
                          <form action="">
                              <div class="form_container">
                                <div class="textarea_control">
                                  <label for="abt">About the Company</label>
                                  <br />
                                  <textarea name="abt" id="abt" cols="50" row="5" placeholder="About the company"></textarea>
                              </div>
                                <div class="form_control">
                                  <label for="code">Job Code</label>
                                  <input id="code" name="code" placeholder="Enter Job Code" />
            
                              </div>
                                  <div class="form_control">
                                      <label for="title">Position Title</label>
                                      <input id="title" name="title" placeholder="Enter Job Title" />
              
                                  </div>
                                  <div class="form_control">
                                    <label for="dept">Department</label>
                                    <input id="dept" name="dept" placeholder="Enter Job Department" />
            
                                </div>
                                <div class="form_control">
                                  <label for="loc">Location</label>
                                  <input id="loc" name="title" placeholder="Enter Job Location" />
            
                              </div>
                                  <div class="textarea_control">
                                      <label for="overview">Job Description</label>
                                      <br />
                                      <textarea name="overview" id="overview" cols="50" row="5" placeholder="Enter Job Overview"></textarea>
                                  </div>
                                  <div class="form_control">
                                      <label for="duty">Duties and Responsibilitites</label>
                                      <input id="duty" name="duty" placeholder="Enter Responsibilities" />
              
                                  </div>
                                  <br />
                                  
                                  <div class="textarea_control">
                                    <label for="qualifications">Qualifications Required</label>
                                    <textarea name="qualifications" id="qualifications" cols="50" row="5" placeholder="Enter Qualifications"></textarea>
            
                                </div>
                                  <div class="textarea_control">
                                      <label for="address">Address</label>
                                      <textarea name="address" id="address" cols="50" row="5" placeholder="Enter address"></textarea>
              
                                  </div>
                                  <div class="form_control">
                                      <label for="city">City</label>
                                      <input id="city" name="city" placeholder="Enter City Name" />
              
                                  </div>
                                  <div class="form_control">
                                      <label for="pincode">Pincode</label>
                                      <input type="number" id="pincode" name="pincode" placeholder="Enter Pincode" />
              
                                  </div>
                                  <div class="form_control">
                                      <label for="datep">Apply By</label>
                                      <input value="2024-03-03" type="date" id="datep" name="datep" />
              
                                  </div>
                                  <div class="form_control">
                                    <label for="date">Join Date</label>
                                    <input value="2024-05-03" type="datej" id="datej" name="datej" />
            
                                </div>
                                <div class="form_control">
                                  <label for="duration">Duration</label>
                                  <input id="duration" name="duration" placeholder="Enter Duration" />
            
                              </div>
                              <br />
                                
                        
                                    <label for="paid">Paid:</label>
                                    <input type="radio" id="paid" name="employment" value="paid" onclick="showSalaryInput()" />
                                    <label for="unpaid">Unpaid:</label>
                                    <input type="radio" id="unpaid" name="employment" value="unpaid" onclick="hideSalaryInput()" />
                                    <div id="salaryInput" style={{ display: 'none'}}>
                                      <label for="salary">Salary:</label>
                                      <input type="number" id="salary" name="salary" placeholder="Enter Salary" />
                                    </div>
            
                                
                              </div>
                              <div class="button_container">
                                  <a class="signin " href="login.html" ><button type="submit" class="sig" ><h2 class="sign">Post</h2></button></a>
                              </div>
                          </form>
                      </div>
                  </div>
                  </div>
                <Footer />
                
            
            </body>
            
        </div>
    );
}

export default AdminHome;
