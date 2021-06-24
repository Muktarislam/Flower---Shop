import React from 'react';
import './Products.css'


const Products = ({service}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div style={{marginBottom:"40px"}} className="text-center product shadow p-4">
                <img style={{ height: '180px' }} src={service.img} className="img-fluid" alt="" />
                <h2>{service.Price}</h2>
                <h4 style={{marginTop:"20px"}}>{service.title}</h4>
                <button style={{backgroundColor:"pink",borderRadius:"8px", padding:"5px 20px", color:"white"}}>Buy Now</button>

            </div>
        </div>
    );
};

export default Products;