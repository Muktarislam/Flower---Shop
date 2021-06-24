import React from 'react';
import flower from '../../../images/69418916-isolated-pink-flower-frame-the-top-right-corner-on-white-background.jpg'

const HeaderMain = () => {
    // const pulse:hover = {
    //     backgroundColor:"pink",
    //     pading:"20px"
    // }
//     const.pulse:hover, 
//     .pulse:focus = {
//   animation: "pulse 1s",
//   boxShadow: "0 0 0 2em rgba(#fff,0)"
// }
    return (
        <main style={{height:"600px"}} className=" row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color :'#3a4256'}}>Your New Happyness <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse nam rem sapiente nisi est.</p>
                <button style={{backgroundColor:"pink", padding:"8px 12px"}} type="btnk">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={flower} className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;