import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import { AboutSection_left, AboutSection_right } from "../components/aboutus_section.jsx";

function AboutPage() {
    useIntersectionObserver();
    return (
          
      <div className="flex flex-col justify-center items-center h-auto w-full" style={{paddingTop: "5%"}} id="about">
        <div className="w-275 flex flex-col gap-10">
          <div className="flex"> 
            <div>
              <h1  style={{ marginTop:"34px"  }} className="hiddens text-3xl md:text-5xl font-bold poppins-Main-Heading ">
                About <span style={{ color: "#FF7D00" }}>us</span>
              </h1>
            </div>
            <div>
              <img style={{ width:"30px", height:"75px", marginLeft: "10px" }} src="/innov_about2.png" alt="logo" className="hiddens " />
            </div>
          </div>
          <AboutSection_right/>
          <AboutSection_left/>
        </div>
      </div>

    );
  }
  
  export default AboutPage;