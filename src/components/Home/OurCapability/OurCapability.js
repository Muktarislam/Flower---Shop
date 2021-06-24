import React from 'react';
import "./OurCapability.css"
import wedding from "../../../images/7235103_preview.jpg"
import vehicle from "../../../images/car.png"
import others from "../../../images/others.png"
import birthday from "../../../images/love.jpg"
import OurCapabilityDetails from '../OurCapabilityDetails/OurCapabilityDetails';
// import OurCapabilityDetails from '../OurCapabilityDetails/OurCapabilityDetails';



const serviceData = [
    {
        img: wedding,
        title: "WEDDING"
    },
    {
        img: birthday,
        title: "BIRTHDAY"
    },
    {
        img: vehicle,
        title: "VEHICLE "
    },
    {
        img: others,
        title: "OTHERS "
    }
]


const OurCapability = () => {
    return (
        <section id="aboutUs" className="capability my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="  title text-uppercase ">Our Extra Capability</h5>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum velit error, libero nobis rem magnam expedita, recusandae, perferendis fugiat ex autem. Modi dicta temporibus labore, nostrum suscipit earum nisi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum velit error, libero nobis rem magnam expedita, recusandae, perferendis fugiat ex autem. Modi dicta temporibus labore, nostrum suscipit earum nisi.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map((service, index) => <OurCapabilityDetails key={index} service={service}></OurCapabilityDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCapability;