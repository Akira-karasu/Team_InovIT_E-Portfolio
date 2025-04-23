import { useState } from "react";
import "./navbar.css";

function NavBar() {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    return (
        <>
            <button id="toggleNav" onClick={toggleNav}>☰</button>
            <nav className={navVisible ? "show" : ""}>
            <img class="logo" style={{height:"150px",width:"150px", marginBottom:"25px"}} src="./innov_icon.png" alt="icon"/>
                <ul>
                    <li className="poppins-Link"><a href="#home">Home</a></li>
                    <li className="poppins-Link"><a href="#about">About</a></li>
                    <li className="poppins-Link"><a href="#team">Team</a></li>
                    <li className="poppins-Link"><a href="#project">Project</a></li>
                    <li className="poppins-Link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
