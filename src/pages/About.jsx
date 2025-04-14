import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";

function AboutPage() {
    useIntersectionObserver();
    return (
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

        </div>
      </div>
    );
  }
  
  export default AboutPage;