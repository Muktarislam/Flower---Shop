import React from 'react';
import './OurCapabilityDetails.css'


const OurCapabilityDetails = ({service}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div  style={{marginBottom:"40px"}} className="text-center capacity shadow p-4">

                <img style={{ height: '180px' }} src={service.img} className="img-fluid" alt="" />
                <p style={{marginTop:"20px"}}>{service.title}</p>

            </div>
        </div>
    );
};

export default OurCapabilityDetails;