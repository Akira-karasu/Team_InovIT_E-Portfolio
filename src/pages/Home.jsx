
import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";

function HomePage() {
  useIntersectionObserver();

  return (
    <div className="con" id="home">
        <h1 className="hiddens poppins-Main-Heading">
          Welcome to the Home <span style={{ color: '#FF7D00' }}>Page</span>
        </h1>
        <p className="hiddens poppins-Sub-Heading">This is a simple React component.</p>
      </div>
  );
}

export default HomePage;
