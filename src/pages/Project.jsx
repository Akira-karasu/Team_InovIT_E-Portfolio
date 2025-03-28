import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";

function ProjectPage() {
    useIntersectionObserver();
    return (
      <div className="con" id="project">
        <h1 className="hiddens poppins-Main-Heading">
          Welcome to the Project <span style={{ color: '#FF7D00' }}>Page</span>
        </h1>
        <p className="hiddens poppins-Sub-Heading">This is a simple React component.</p>
      </div>
    );
  }
  
  export default ProjectPage;