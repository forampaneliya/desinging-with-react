import { Link } from "react-router-dom";
import "./Header.css"

function Header()
{
    return(
        <>
        <div className="header-top">
            <div className="header-top-wrap">
                <div className="header-logo">
                    <img src="./src/Pages/Header/img/1.png" alt="" />
                </div>
                <div className="book-now">
                    <button>Book Now<br></br><span className="bottom-text">Excusive Rates</span></button>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="header-bottom-wrap">
                <ul className="header-menu">
                    <li className="list">
                        <Link to="/" className="single-menu active ">HOME</Link>
                    </li>
                    <li className="list">
                        <Link to="/rooms" className="single-menu">ROOMS & SUITS</Link>
                    </li>
                    <li className="list">
                        <Link to="/groups" className="single-menu">GROUP SALES</Link>
                    </li>
                    <li className="list">
                        <Link to="/meeting" className="single-menu">MEETING & EVENTS</Link>
                    </li>
                    <li className="list">
                        <Link to="/dining" className="single-menu">DINING</Link>
                    </li>
                    <li className="list">
                        <Link to="/about" className="single-menu">ABOUT US</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Header;