import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import { AboutSection_left, AboutSection_right } from "../components/aboutus_section.jsx";

function AboutPage() {
    useIntersectionObserver();
    return (
<<<<<<< HEAD
      <div className="con" id="about">
        <div className="flex"> 
          <div>
            <h1 className="hiddens poppins-Main-Heading">
               About <span style={{ color: '#FF7D00' }}>Us</span>
            </h1>
          </div>

          <div>
            <img style={{ width:"30px", height:"75px", marginLeft: "10px", paddingBottom:"22px" }} src="/innov_about2.png" alt="logo" className="hiddens " />
          </div>

=======
      <div className="flex flex-col justify-center items-center h-auto w-full" style={{paddingTop: "5%"}} id="about">
        <div className="w-275 flex flex-col gap-10">
          <h1 className="hiddens text-3xl md:text-5xl font-bold poppins-Main-Heading">
            About <span style={{ color: "#FF7D00" }}>us</span>
          </h1>
          <AboutSection_right/>
          <AboutSection_left/>
>>>>>>> a5e0ade40803251665530f05edbba272e96d7eb5
        </div>
      </div>

    );
  }
  
  export default AboutPage;