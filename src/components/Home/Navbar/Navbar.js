import React from 'react';
import nav from '../../../images/gggggggggg.webp'

const Navbar = () => {
    return (
        <div>
            <nav style={{backgroundColor:'rgb(247, 201, 208)'}} class="navbar navbar-expand-lg navbar-light">
                <div>
                    <img style={{height:"50px", width:"50px", marginLeft:"20px"}} src={nav} alt="" srcset="" />
                </div>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link ms-6 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;



