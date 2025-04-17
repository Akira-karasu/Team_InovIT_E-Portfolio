
import Button from "../components/Tags.jsx";
import IconButton from "../components/iconButton.jsx";
import GitHubIcon from "../assets/images/github.png";
import FacebookIcon from "../assets/images/facebook.png";
import LinkedInIcon from "../assets/images/linkedin.png";
import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import HomeCard from "../components/home_card.jsx";


function HomePage() {
  useIntersectionObserver();

  return (
  <div id="home" className="flex flex-col justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full max-w-6xl mx-auto px-6 gap-4 h-screen w-full">
      <div className="hiddens text-center md:text-left p-4">
        <h1 className="text-3xl md:text-5xl font-bold poppins-Main-Heading">
          Innov-<span style={{ color: "#FF7D00" }}>IT</span>
        </h1>

        <p className="poppins-Sub-Heading">This is a simple React component.</p>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl poppins-Section-Titles w-90">
          We are InnovIT, a team driven by innovation in Information Technology
        </h2>

      </div>
      
      <div className="hiddens p-4 flex justify-center">
        <img src="/innov_icon2.png" alt="logo" className="w-64 sm:w-80 md:w-96 h-auto" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full h-screen max-w-6xl mx-auto px-6 gap-4" style={{padding: "15px"}}>
      <HomeCard
        img="/mission.png"
        title="Mission"
        description="As innovIT, our mission is to drive innovation in education by providing students with the tools they need to excel in organization, time management, and academic performance. We are committed to creating user-friendly, effective, and innovative web apps that empower students to efficiently navigate their academic journeys, enhancing both their studies and personal growth."
      />
      <HomeCard
        img="/vision.png"
        title="Vision"
        description="As innovIT, our vision is to transform the student experience by utilizing cutting-edge technology to streamline academic management, time organization, and overall performance. We strive to empower students with innovative tools that help them thrive in both their academic pursuits and personal development."
      />
    </div>
  </div>  

  );
}

export default HomePage;
