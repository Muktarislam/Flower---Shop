import React from 'react';
import './Products.css'


const Products = ({service}) => {
    // function alert() {
    //     alert("I am an alert box!");
    //   }
    return (
        <div className="col-md-3 col-sm-6">
            <div style={{marginBottom:"40px"}} className="text-center product shadow p-4">
                <img style={{ height: '180px' }} src={service.img} className="img-fluid" alt="" />
                <h2>{service.Price}</h2>
                <h4 style={{marginTop:"20px"}}>{service.title}</h4>
                <a href="https://www.amazon.com/" target="_blank" class="btn btn-outline-primary">Order Now</a>
            </div>
        </div>
    );
};

export default Products;