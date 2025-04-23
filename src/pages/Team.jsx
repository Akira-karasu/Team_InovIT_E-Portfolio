import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import TeamCard from "../components/team_card.jsx";
function TeamPage() {
    useIntersectionObserver();
    return (
      <div className="flex flex-col items-center justify-center" style={{marginTop:"40px",marginBottom:"40px", paddingTop:"50px"}} id="team">

        <div className="flex"> 
            <div className="hiddens text-center md:text-left p-4 ">
                <h1 style={{ fontSize: "35px", marginTop:"13px" }} className="poppins-Main-Heading">
                  Team <span style={{ color: "#FF7D00" }}>Members</span>
                </h1>
            </div>
            <div>
              <img style={{ width:"110px", height:"75px", marginLeft: "-10px" }} src="/innov_projects.png" alt="logo" className="hiddens " />
            </div>
        </div>

        <br/>

        <div className="flex flex-row flex-wrap justify-center gap-5 w-3/4">
          <TeamCard
            picture="/enrique.png" 
            name="Lord Raven Flea Iris A. Enrique"
            role="UX/UI design, Front-end"
            expertise={["Front-end", "Back-end"]}
            github="https://github.com/Akira-karasu"
            facebook="https://www.facebook.com/akiraKarasu010/"
            linkedin="https://www.linkedin.com/in/iris-enrique-a5ba63325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <TeamCard
            picture="/bitancor.png" 
            name="Xevier Clyde A. Bitancor"
            role="UX/UI design, Front-end"
            expertise={["Front-end", "Back-end"]}
            github="https://github.com/Emptmist"
            facebook="https://www.facebook.com/xavierclyde.bitancor"
            linkedin="https://www.linkedin.com/in/clyde-bitancor-8b226b176/"
          />
          <TeamCard
            picture="/gascon.png" 
            name="Jamaielyn May Z. Gascon"
            role="Designing, Reporting  & Documentation"
            expertise={["Tester", "Researcher", "analysts"]}
            github="https://github.com/jamayymay"
            facebook=""
            linkedin=""
          />
          <TeamCard
            picture="/laurente.png" 
            name="Jahmiebelle P. Laurente"
            role="Documenter"
            expertise={["Editing", "Data Encoder", "Data Analyst", "Graphic Designer"]}
            github="https://github.com/Jahmiebelle"
            facebook="https://www.facebook.com/share/1EMbiG7Z8L/"
            linkedin=""
          />
          <TeamCard
            picture="/par.png" 
            name="John Patrick B. Par"
            role="Documenter"
            expertise={["Tester", "Researcher", "Data Analyst"]}
            github="https://github.com/pattrick2"
            facebook="https://www.facebook.com/share/168eGmxQZo/"
            linkedin=""
          />
        </div>  
        
      </div>
    );
  }
  
  export default TeamPage;