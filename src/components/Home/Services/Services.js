import React from 'react';
import DelivaryMan from '../../../images/delivary-man.png';
import Decoration from '../../../images/decoration.jpg';
import Tree from '../../../images/tree2.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Home Delivary',
        img: DelivaryMan,
        price: 'price per Rate : 120$'
    },
    {
        name: 'Home Decoration',
        img: Decoration,
        price: 'price per Rate : 400$'
    },
    {
        name: 'Flower Tree Plant',
        img: Tree,
        price: 'price per Rate : 100$'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
               <u><h1 style={{ color: '#1CC7C1' }}>Our Service Provide</h1></u> 
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};
export default Services;