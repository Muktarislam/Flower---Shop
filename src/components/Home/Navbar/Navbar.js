import React from 'react';
import nav from '../../../images/gggggggggg.webp'

const Navbar = () => {
    return (
        <div>
            <nav style={{backgroundColor:'rgb(247, 201, 208)'}} class="navbar navbar-expand-lg navbar-light">
                <div>
                    <a href="https://www.flowercityunion.com/"><img style={{height:"50px", width:"50px", marginLeft:"20px"}} src={nav} alt="" srcset="" /></a>
                </div>
                <a href="https://www.flowercityunion.com/" class="navbar-brand">Flower City</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link ms-6 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#Service">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#Product">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#Testimonial">Testimonial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#Capability">Capability</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;



