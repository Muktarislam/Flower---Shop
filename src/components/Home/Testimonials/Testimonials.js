import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import Shreya from '../../../images/shreya.jpg';
import Michkel from '../../../images/mohammad ali.jpg';
import MohammadAli from '../../../images/mickel.jpg';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Shreya',
        from : 'Mumbai',
        img : Shreya
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Michkel',
        from : 'California',
        img : Michkel
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Mohammad Ali',
        from : 'Pakistaln',
        img : MohammadAli
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div style={{textAlign:"center"}} className="section-header">
                   <h1>Testimonial For Client</h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;