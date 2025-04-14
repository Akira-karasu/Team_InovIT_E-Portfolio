import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import ProjectCard from "../components/project_card.jsx";
function TeamPage() {
  useIntersectionObserver();
    return (
      <div className="con" id="team">
        
        <div className="hiddens text-center md:text-left p-4 ">
            <h1 style={{ fontSize: "35px" }} className="poppins-Main-Heading">
              Team-<span style={{ color: "#FF7D00" }}>Projects</span>
            </h1>
        </div>
        
        <br/>

        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center max-w-3x1 mx-auto px-6  gap-4 text-[10px] hiddens" style={{padding: "15px"}}>
          <ProjectCard
            img="/test.png"
            title="Mission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            img="/vision.png"
            title="Vision"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            img="/mission.png"
            title="Mission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            img="/vision.png"
            title="Vision"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    );
  }
  
  export default TeamPage;