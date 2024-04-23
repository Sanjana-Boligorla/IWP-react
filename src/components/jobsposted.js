// src/components/Home.js
import React from 'react';
import './style.css';

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
import ViewInfo from './viewinfo'
import ApplyNow from './applynow'
const Jobs = () => {
    return (
        <div>
            
                <div class="foot pt-3 px-3">
                    <br />
                    <h2 class="text-center mov text-dark ">JOB OPENINGS</h2>
                    <div class="d-flex justify-content-evenly">
                    <div class="card w-50 bg-black m-3">
                        <div class="d-flex">
                        <img src={comp2}  class= "imgg"  height="150px" width="120px"/>
                        <div>
                            <h3 class="mov m-3">Web Developer Intern</h3>
                            <h5 class="mov m-3 ">STH Technologies</h5>

                            
                            &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                            View Info
                            </a></button>&ensp;
                            
                            <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                            
                        </div>
                        </div>
                    </div>
                    <div class="card w-50 bg-black m-3">
                        <div class="d-flex">
                        <img src={comp2}  class="imgg" height="150px" width="120px"/>
                        <div>
                            <h3 class="mov m-3">Web Developer Intern</h3>
                            <h5 class="mov m-3 ">STH Technologies</h5>

                            
                            &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                            View Info
                            </a></button>&ensp;
                            
                            <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                            
                        </div>
                        </div>
                        
                    </div>
                    
                    </div>
                    <div class="d-flex justify-content-evenly">
                        <div class="card w-50 bg-black m-3">
                            <div class="d-flex">
                            <img src={comp2}  class= "imgg"  height="150px" width="120px"/>
                            <div>
                                <h3 class="mov m-3">Web Developer Intern</h3>
                                <h5 class="mov m-3 ">STH Technologies</h5>
    
                                
                                &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                                View Info
                                </a></button>&ensp;
                                
                                <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                                
                            </div>
                            </div>
                        </div>
                        <div class="card w-50 bg-black m-3">
                            <div class="d-flex">
                            <img src={comp2}  class="imgg" height="150px" width="120px"/>
                            <div>
                                <h3 class="mov m-3">Web Developer Intern</h3>
                                <h5 class="mov m-3 ">STH Technologies</h5>
    
                                
                                &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                                View Info
                                </a></button>&ensp;
                                
                                <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                                
                            </div>
                            </div>
                            
                        </div>
                        
                        </div>
                        <div class="d-flex justify-content-evenly">
                            <div class="card w-50 bg-black m-3">
                                <div class="d-flex">
                                <img src={comp2}  class= "imgg"  height="150px" width="120px"/>
                                <div>
                                    <h3 class="mov m-3">Web Developer Intern</h3>
                                    <h5 class="mov m-3 ">STH Technologies</h5>
        
                                    
                                    &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                                    View Info
                                    </a></button>&ensp;
                                    
                                    <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="card w-50 bg-black m-3">
                                <div class="d-flex">
                                <img src={comp2}  class="imgg" height="150px" width="120px"/>
                                <div>
                                    <h3 class="mov m-3">Web Developer Intern</h3>
                                    <h5 class="mov m-3 ">STH Technologies</h5>
        
                                    
                                    &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="./viewinfo" class="vi" >
                                    View Info
                                    </a></button>&ensp;
                                    
                                    <button class="align-items-right hpbt rounded" ><a href="./applynow"  class="vi">Apply Now</a></button>
                                    
                                </div>
                                </div>
                                
                            </div>
                            
                            </div>
                            <div class="d-flex justify-content-evenly">
                                <div class="card w-50 bg-black m-3">
                                    <div class="d-flex">
                                    <img src={comp2}  class= "imgg"  height="150px" width="120px"/>
                                    <div>
                                        <h3 class="mov m-3">Web Developer Intern</h3>
                                        <h5 class="mov m-3 ">STH Technologies</h5>
            
                                        
                                        &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                                        View Info
                                        </a></button>&ensp;
                                        
                                        <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                                        
                                    </div>
                                    </div>
                                </div>
                                <div class="card w-50 bg-black m-3">
                                    <div class="d-flex">
                                    <img src={comp2}  class="imgg" height="150px" width="120px"/>
                                    <div>
                                        <h3 class="mov m-3">Web Developer Intern</h3>
                                        <h5 class="mov m-3 ">STH Technologies</h5>
            
                                        
                                        &ensp;&ensp;<button class=" align-items-right hpbt rounded " ><a href="/viewinfo" class="vi" >
                                        View Info
                                        </a></button>&ensp;
                                        
                                        <button class="align-items-right hpbt rounded" ><a href="/applynow"  class="vi">Apply Now</a></button>
                                        
                                    </div>
                                    </div>
                                    
                                </div>
                                
                                </div>
                              
                </div>
        
            
            
            
        </div>
    );
}

export default Jobs;
