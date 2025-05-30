import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import { AboutSection_left, AboutSection_right } from "../components/aboutus_section.jsx";

function AboutPage() {
    useIntersectionObserver();
    return (
          
      <div className="flex flex-col justify-center items-center h-auto w-full" style={{paddingTop: "5%"}} id="about">                     
        <div className="w-auto flex flex-col gap-10" style={{ padding:"35px"}}>
          <div className="flex justify-center items-center">
            <div> 
              <h1 className="hiddens text-3xl md:text-5xl font-bold poppins-Main-Heading">
                About <span style={{ color: "#FF7D00" }}>us</span>
              </h1>                         
            </div>                                          
            <div>
              <img style={{ width:"30px", height:"75px", marginLeft: "10px" }} src="/innov_about2.png" alt="logo" className="hiddens " />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <AboutSection_right/>
            <AboutSection_left/>
          </div>
          
        </div>
      </div>

    );
  }
  
  export default AboutPage;