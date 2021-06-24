// // // import React from 'react';
// // // import first from '../../../images/7235103_preview.jpg';
// // // import second from '../../../images/angelina-jollivet-mNEpmNiFdXs-unsplash-removebg-preview.png';
// // // import third from '../../../images/birthday-removebg-preview.png';

// // // const Carousell = () => {
// // //     return (
// // //         <div>
// // //             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
// // //                 <div class="carousel-indicators">
// // //                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
// // //                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
// // //                     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
// // //                 </div>
// // //                 <div class="carousel-inner">
// // //                     <div class="carousel-item active">
// // //                         <img style={{height:"500px"}} src={first} class="w-80" alt="..." />
// // //                         <div class="carousel-caption d-none d-md-block">
// // //                             <h5>First slide label</h5>
// // //                             <p>Some representative placeholder content for the first slide.</p>
// // //                         </div>
// // //                     </div>
// // //                     <div class="carousel-item">
// // //                         <img src={second} class="w-100" alt="..." />
// // //                         <div class="carousel-caption d-none d-md-block">
// // //                             <h5>Second slide label</h5>
// // //                             <p>Some representative placeholder content for the second slide.</p>
// // //                         </div>
// // //                     </div>
// // //                     <div class="carousel-item">
// // //                         <img src={third} class="d-block w-100" alt="..." />
// // //                         <div class="carousel-caption d-none d-md-block">
// // //                             <h5>Third slide label</h5>
// // //                             <p>Some representative placeholder content for the third slide.</p>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
// // //                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
// // //                     <span class="visually-hidden">Previous</span>
// // //                 </button>
// // //                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
// // //                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
// // //                     <span class="visually-hidden">Next</span>
// // //                 </button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Carousell;

// // import React from 'react';
// // import first from '../../../images/angelina-jollivet-mNEpmNiFdXs-unsplash.jpg'
// // import second from '../../../images/angelina-jollivet-mNEpmNiFdXs-unsplash.jpg'
// // import third from '../../../images/birthday-removebg-preview.png'

// // const Carousell = () => {
// //     return (
// //         <div class="container" style={{width:'500px'}}>
// //             <h2>Carousel Example</h2>
// //             <div id="myCarousel" class="carousel slide" data-ride="carousel">
// //                 {/* <ol class="carousel-indicators">
// //                     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
// //                     <li data-target="#myCarousel" data-slide-to="1"></li>
// //                     <li data-target="#myCarousel" data-slide-to="2"></li>
// //                 </ol> */}

// //                 <div class="carousel-inner">

// //                     <div class="item active">
// //                         <img src={first} alt="Los Angeles" style={{ width: "100%" }} />
// //                         <div class="carousel-caption">
// //                             <h3>Los Angeles</h3>
// //                             <p>LA is always so much fun!</p>
// //                         </div>
// //                     </div>

// //                     <div class="item">
// //                         <img src={second} alt="Chicago" style={{ width: "100%" }} />
// //                         <div class="carousel-caption">
// //                             <h3>Chicago</h3>
// //                             <p>Thank you, Chicago!</p>
// //                         </div>
// //                     </div>

// //                     <div class="item">
// //                         <img src={third} alt="New York" style={{ width: "100%" }} />
// //                         <div class="carousel-caption">
// //                             <h3>New York</h3>
// //                             <p>We love the Big Apple!</p>
// //                         </div>
// //                     </div>

// //                 </div>

// //                 <a class="left carousel-control" href="#myCarousel" data-slide="prev">
// //                     <span class="glyphicon glyphicon-chevron-left"></span>
// //                     <span class="sr-only">Previous</span>
// //                 </a>
// //                 <a class="right carousel-control" href="#myCarousel" data-slide="next">
// //                     <span class="glyphicon glyphicon-chevron-right"></span>
// //                     <span class="sr-only">Next</span>
// //                 </a>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Carousell;


// import React from 'react';
// import first from '../../../images/7235103_preview.jpg';
// import second from '../../../images/angelina-jollivet-mNEpmNiFdXs-unsplash-removebg-preview.png';
// import third from '../../../images/birthday-removebg-preview.png';

// const Carousell = () => {
//     return (
//         <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <div style={{backgroundColor:'#ffe6e6'}} class=" p-5 row d-flex align-items-center">
//                         <div class="col-md-7">
//                             <h1>Mega LCD TV For Sports</h1>
//                             <h5>This is the best tv in the world for people who just want to waste time in front of tv</h5>
//                             <h1 class="text-warning">$1200</h1>
//                             <button class="bg-warning text-white">Buy Now</button>
//                         </div>
//                         <div class="col-md-5">
//                             <img src={first} class="d-block w-100" alt="..."/>
//                         </div>
//                         </div>
//                     </div>
//                     <div class="carousel-item">
//                         <div style={{backgroundColor:'#ffe6e6'}} class=" p-5 row d-flex align-items-center">
//                             <div class="col-md-7">
//                                 <h1>Cool Dude Headphone</h1>
//                                 <h5>This is the best headphone in the world for people who just want to waste time in front of funky world.</h5>
//                                 <h1 class="text-warinig">$420</h1>
//                                 <button class="bg-warning text-white">Buy Now</button>
//                             </div>
//                             <div class="col-md-5">
//                                 <img src={second} class="d-block w-100" alt="..."/>
//                         </div>
//                             </div>
//                         </div>
//                         <div class="carousel-item">
//                             <div style={{backgroundColor:'#ffe6e6'}} class=" p-5 row d-flex align-items-center">
//                                 <div class="col-md-7">
//                                     <h1>X-Box for your living room</h1>
//                                     <h5>This is the best x-box in the world for people who just want to waste time in front of fake sports.</h5>
//                                     <h1 class="text-warinig">$600</h1>
//                                     <button class="bg-warning text-white">Buy Now</button>
//                                 </div>
//                                 <div class="col-md-5">
//                                     <img src={third} class="d-block w-100" alt="..."/>
//                             </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
//                             data-bs-slide="prev">
//                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span class="visually-hidden">Previous</span>
//                         </button>
//                         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
//                             data-bs-slide="next">
//                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span class="visually-hidden">Next</span>
//                         </button>
//                     </div>
//                     );
// };

// export default Carousell;
import React from 'react';
import './Carousell.css';
import image from '../../../images/home2.jpg'

const Carousell = () => {
    return (
        <div className="containerrr">
            <img className='imagee' style={{ height: "500px" }} src={image} alt="" srcset="" />
            <div className="overlay">
                <div className="text">Hello World</div>
            </div>
        </div>
    );
};

export default Carousell;