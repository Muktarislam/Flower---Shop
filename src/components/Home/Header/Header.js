import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import OurCapability from '../OurCapability/OurCapability';
import Contact from '../Contact/Contact';
// import Carousell from '../Carousell/Carousell';
import Testimonials from '../Testimonials/Testimonials';
import Product from '../Product/Product';
import Services from '../Services/Services';
const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <Product></Product>
            <Testimonials></Testimonials>
            <OurCapability></OurCapability>
            <Contact></Contact>
            {/* <Carousell></Carousell> */}
        </div>
    );
};

export default Header;