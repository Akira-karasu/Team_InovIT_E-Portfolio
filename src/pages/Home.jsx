<<<<<<< HEAD
import Button from "../components/button.jsx";
import IconButton from "../components/iconButton.jsx";
import GitHubIcon from "../assets/images/github.png";
import FacebookIcon from "../assets/images/facebook.png";
import LinkedInIcon from "../assets/images/linkedin.png";
=======

import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
>>>>>>> 275a8070b63b3f76d494d94e859bec2459a9e09b

function HomePage() {
  useIntersectionObserver();

  return (
    <div className="con" id="home">
        <h1 className="hiddens poppins-Main-Heading">
          Welcome to the Home <span style={{ color: '#FF7D00' }}>Page</span>
        </h1>
<<<<<<< HEAD
        <p className="poppins-Sub-Heading">This is a simple React component.</p>
        
        <br />
        <div className="grid grid-cols-3 gap-4 place-items-center ">
          <Button text="Front-end" />
          <Button text="UI/UX" />
          <Button text="Back-end" />
        </div>

        <br/>
        <div className="grid grid-cols-3 gap-4 place-items-center ">
          <IconButton  github={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/Emptmist", "_blank")}/>} />
          <IconButton  facebook={<img src={FacebookIcon} alt="Facebook" onClick={() => window.open("https://www.facebook.com/xavierclyde.bitancor", "_blank")}/>} />
          <IconButton  linkedin={<img src={LinkedInIcon} alt="LinkedIn" onClick={() => window.open("https://linkedin.com", "_blank")}/>} /> 
        </div>
=======
        <p className="hiddens poppins-Sub-Heading">This is a simple React component.</p>
>>>>>>> 275a8070b63b3f76d494d94e859bec2459a9e09b
      </div>
  );
}

export default HomePage;
