import React from 'react';
import "./Product.css"
import flower1 from "../../../images/bn1.png"
import flower2 from "../../../images/bn2.png"
import flower3 from "../../../images/bn3.png"
import flower4 from "../../../images/bn4.png"
import flower5 from "../../../images/bn5.png"
import flower6 from "../../../images/bn7.png"
import flower7 from "../../../images/bn8.png"
import flower8 from "../../../images/bn+.png"
import Products from "../Products/Products";
// import OurCapabilityDetails from '../OurCapabilityDetails/OurCapabilityDetails';



const serviceData = [
    {
        img: flower1,
        title: "Jarman Flower",
        Price: "$ 100"
    },
    {
        img: flower2,
        title: "Bd Flower",
        Price: "$ 120"
    },
    {
        img: flower3,
        title: "Indian Flower ",
        Price: "$ 80"
    },
    {
        img: flower4,
        title: "US Flower ",
        Price: "$ 100"
    },
    {
        img: flower5,
        title: "UK Flower",
        Price: "$ 130"
    },
    {
        img: flower6,
        title: "Kanada Flower",
        Price: "$ 90"
    },
    {
        img: flower7,
        title: "Japanes Flower ",
        Price: "$ 50"
    },
    {
        img: flower8,
        title: "Chines Flower ",
        Price: "$ 110"
    }
]


const Product = () => {
    return (
        <section id="aboutUs" className="capability my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="  title text-uppercase ">Our Products</h5>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map((service, index) => <Products key={index} service={service}></Products>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Product;