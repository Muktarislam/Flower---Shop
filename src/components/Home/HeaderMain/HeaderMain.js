import React from 'react';
import logo from '../../../images/gif.gif'

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
                <button type="button" class="btn btn-outline-warning">Appointment Here</button>            </div>
            <div className="col-md-6">
            <img style={{float:"right", marginRight:"20px", height:"400px"}} src={logo} className="App-logo" alt="logo" />
            </div>
        </main>
    );
};

export default HeaderMain;