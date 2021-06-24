import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div style={{boxShadow:"gray 3px 3px 8px", marginLeft:"50px",marginBottom:"10px"}} className="card col-md-3">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img style={{borderRadius:"60%",}} className="mx-3,img-fluid" src={img} alt="" width="100"/>
                <div style= {{marginLeft:"20px"}}>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;