import "./navbar.css";

function NavBar(){
    return (
        <nav>
            <ul>
                <li className="poppins-Link"><a href="#home">Home</a></li>
                <li className="poppins-Link"><a href="#about">About</a></li>
                <li className="poppins-Link"><a href="#team">Team</a></li>
                <li className="poppins-Link"><a href="#project">Project</a></li>
                <li className="poppins-Link"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;