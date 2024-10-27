import "./Home.css"
import { FaWifi } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdLocalAtm } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";


function Banner() {
    return (
        <>
            <div className="banner-wrap">
                <div className="banner">
                    <div className="video">
                        <video src="https://www.staging3.harmonysuites.com/wp-content/uploads/2023/08/1920-x-895-Reel-V6.mp4" 
                        autoPlay loop muted="muted"></video>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="content-wrap">
                                <h2 className="heading">
                                    Welcome to Harmony Suites
                                </h2>
                                <span className="second-heading">Book Your Dream Getaway</span>
                                <p className="para">Nestled in the vibrant heart of Secaucus, New Jersey, Harmony Suites welcomes you to a world of refined indulgence. Immerse yourself in the pinnacle of comfort, just moments away from the iconic American Dream Mall, where shopping fantasies come to life. Feel the exhilaration of being near the legendary MetLife Stadium, home to unforgettable events. Our lavish accommodations and personalized service promise a stay beyond compare. Embrace the perfect blend of convenience and luxury, where every moment is a cherished memory in the making. Your journey to opulence begins at Harmony Suites. Book your escape today!</p>
                                <button className="welcome-btn">Explore our hotel</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img-wrap">
                                <img src="./src/Pages/Home/img/second.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="include">
                <div className="container">
                    <div className="heading" style={{ textAlign: "center" }}>
                        Amenities
                    </div>
                    <div className="included-menu">
                        <ul style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
                            <li className="list-inc"><FaWifi className="icon" /><span className="menu-inc">Free Wifi</span></li>
                            <li className="list-inc"><MdFreeBreakfast className="icon" /><span className="menu-inc">Complimentary Breakfast</span></li>
                            <li className="list-inc"><FaParking className="icon" /><span className="menu-inc">Free Parking</span></li>
                            <li className="list-inc"><GiGymBag className="icon" /><span className="menu-inc">Gym </span></li>
                            <li className="list-inc"><FaPersonSwimming className="icon" /><span className="menu-inc">Swimming Pool</span></li>


                        </ul>

                        <ul style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
                            <li className="list-inc"><FaKey className="icon" /><span className="menu-inc"> Key Card</span></li>
                            <li className="list-inc"><FaHandshake className="icon" /><span className="menu-inc">Meeting Facilities </span></li>
                            <li className="list-inc"><MdLocalAtm className="icon" /><span className="menu-inc"> ATM </span></li>
                            <li className="list-inc"><IoBusiness className="icon" /><span className="menu-inc">Business Center </span></li>


                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;