import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import { AboutSection_left, AboutSection_right } from "../components/aboutus_section.jsx";

function AboutPage() {
    useIntersectionObserver();
    return (
      <div className="flex flex-col justify-center items-center h-auto w-full" style={{paddingTop: "5%"}} id="about">
        <div className="w-275 flex flex-col gap-10">
          <h1 className="hiddens text-3xl md:text-5xl font-bold poppins-Main-Heading">
            About <span style={{ color: "#FF7D00" }}>us</span>
          </h1>
          <AboutSection_right/>
          <AboutSection_left/>
        </div>
      </div>

    );
  }
  
  export default AboutPage;