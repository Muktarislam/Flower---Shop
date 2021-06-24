import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-1 py-5">
           <div className="container">
               <div className="section-header text-center mb-5">
                    <h2 className="text-primary">Contact</h2>
                    <h3 className="text-primary">Always  connect with us</h3>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group mt-2">
                           <input type="text" className="form-control" placeholder="Email Address" required/>
                       </div>
                       <div className="form-group mt-2">
                           <input type="text" className="form-control" placeholder="Subject" required/>
                       </div>
                       <div className="form-group mt-2">
                           <textarea name="" className="form-control" id="" cols="5" rows="5" placeholder="Message" required></textarea>
                       </div>
                       <div className="form-group text-center" required>
                           <button className="Btn" type="button"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;


