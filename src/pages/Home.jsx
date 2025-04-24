import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import HomeCard from "../components/home_card.jsx";

function HomePage() {
  useIntersectionObserver();

  return (
  <div id="home" className="flex flex-col justify-center items-center" style={{marginBottom: "10px"}}>
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center max-w-6xl mx-auto px-6 gap-4 w-full h-screen sm:gap-0">
      <div className="hiddens text-center sm:h-auto md:text-left p-4 flex flex-col place-item-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold poppins-Main-Heading">
          Innov-<span style={{ color: "#FF7D00" }}>IT</span>
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl poppins-Section-Titles w-90">
          We are InnovIT, a team driven by innovation in Information Technology
        </h2>

      </div>
      
      <div className="hiddens p-4 flex justify-center">
        <img src="/innov_icon2.png" alt="logo" className="w-64 sm:w-80 md:w-96 h-auto"/>
      </div>
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-10 w-3/4">
      <HomeCard
        img="/mission.png"
        title="Mission"
        description="As innovIT, our mission is to drive innovation in education by providing students with the tools they need to excel in organization, time management, and academic performance. We are committed to creating user-friendly, effective, and innovative web apps that empower students to efficiently navigate their academic journeys, enhancing both their studies and personal growth."
      />
      <HomeCard
        img="/vision.png"
        title="Vision"
        description="As innovIT, our vision is to transform the student experience by utilizing cutting-edge technology to streamline academic management, time organization, and overall performance. We strive to empower students with innovative tools that help them thrive in both their academic pursuits and personal development. Our goal is to inspire students to adopt new, more effective learning strategies, fostering a future where they possess the skills to excel not only in their studies but also in their future endeavors.
"
      />
    </div>
  </div>  

  );
}

export default HomePage;
