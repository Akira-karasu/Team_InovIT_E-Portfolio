import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import ProjectCard from "../components/project_card.jsx";
import Button from "../components/Tags.jsx";
import IconButton from "../components/iconButton.jsx";
import GitHubIcon from "../assets/images/github.png";


function ProjectPage() {
  useIntersectionObserver();
    return (
      <div className="flex flex-col items-center justify-center" style={{marginTop:"40px",marginBottom:"40px", paddingTop:"50px"}} id="project">
          
        <br/>

        <div className="flex"> 
            <div className="hiddens text-center md:text-left p-4 ">
                <h1 style={{ fontSize: "35px", marginTop:"30px" }} className="poppins-Main-Heading">
                  Team <span style={{ color: "#FF7D00" }}>Projects</span>
                </h1>
            </div>
            <div>
              <img style={{ width:"110px", height:"75px", marginLeft: "10px" }} src="/innov_team.png" alt="logo" className="hiddens " />
            </div>
        </div>
        
        <br/>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center max-w-3x1 mx-auto px-6 gap-4 text-[10px] hiddens" style={{padding: "25px"}}>
          <ProjectCard
            img="/scholarrShip.png"
            title="Scholarship System"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="A system that organizes, manages, and tracks scholarship applications for students and administrators."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="HTML" />
                <Button tags="JS" />
                <Button tags="CSS" />
                <Button tags="PHP" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/Naksu14/SCHOLARSHIP_SYSTEM.git", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/empowerFitnessApp.png"
            title="EFA Mobile App"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button ongoing="On-going" />
            </div>
            }
            description="mobile application designed to track workouts, set goals, and motivate users toward a healthier lifestyle."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="React" />
                <Button tags="JS" />
                <Button tags="PHP" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/Emptmist/EFA.git", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/churchSystem.jpg"
            title="Church System"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="platform to organize mass schedules, church events, and community services at Baclaran Church."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="HTML" />
                <Button tags="CSS" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/jamayymay/BACLARANN-CHURCH.git", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/juanBikeri.jpg"
            title="Billing System"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="Bakery system for managing billing, payments, and customer preference cake flavor for Juan Bikeri."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-4 gap-4" >
                <Button tags="PYTHON" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/Emptmist/JuanBikeri.git", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/barrangaySystem.jpg"
            title="Barrangay System"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="A comprehensive system to oversee resident records, barangay functions, and community events in Molino 4."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="HTML" />
                <Button tags="CSS" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/Emptmist/barrangay.git", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/alumniSystem.jpg"
            title="Alumni System"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="A platform for fostering connections, managing alumni records, and promoting events and networking for CVSU Imus graduates."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="HTML" />
                <Button tags="JS" />
                <Button tags="CSS" />
                <Button tags="PHP" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/jamayymay/ALUMNI-MANAGEMENT-SYSTEM.git", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/cipher.jpg"
            title="Cipher Hub" 
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button ongoing="On-going" />
            </div>
            }
            description="CipherHub is a powerful and user-friendly online tool for encrypting and decrypting text using various cipher algorithms."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="HTML" />
                <Button tags="CSS" />
                <Button tags="JS" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://akira-karasu.github.io/Cipher-Project/?fbclid=IwZXh0bgNhZW0CMTEAAR0ddPTh-0USdqNSz3Bb3NxnYRKzE9mTO41x1PYKSu7ubPxxF8sRdPC6DUQ_aem_CNIeL7huUUH9YC4IahJ0PA", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/cravesotg.jpg"
            title="Craves OTG"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="Craves OTG is an online business that aims to serve your cravings quickly, freshly, and without any hassle."
            Button={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
                <Button tags="HTML" />
                <Button tags="JS" />
                <Button tags="CSS" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/", "_blank")}/>} />
              </div>
            }
          />
          <ProjectCard
            img="/QueueManagement.png"
            title="Queue Management"
            stat={
              <div style={{marginBottom:"1px" }} className="grid grid-cols-5 gap-4" >
              <Button done="Done" />
            </div>
            }
            description="is an Arduino and stand
alone website-based system that allows users to choose their intended agenda by providing
two options: whether they want to directly buy a uniform or line up for size fitting upon arrival."
            Button={
              <div style={{marginBottom:"1px" }} className="flex flex-row justify-start place-align-start text-center flex-wrap gap-1" >
                <Button tags="HTML" />
                <Button tags="JS" />
                <Button tags="CSS" />
                <Button tags="PHP" />
                <Button tags="BS" />
              </div>
            }
            github={
              <div>
                <IconButton  githubTP={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open("https://github.com/Naksu14/Queue-Management-Device.git", "_blank")}/>} />
              </div>
            }
          />
        </div>
      </div>
    );
  }
  
  export default ProjectPage;