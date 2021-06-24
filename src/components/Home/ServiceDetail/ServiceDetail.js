import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div style={{marginBottom:"20px"}} className="col-md-4 text-center">
            <img style={{height: '150px'}} src={service.img} alt="" />
            
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <h5>{service.price}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    );
};

export default ServiceDetail;