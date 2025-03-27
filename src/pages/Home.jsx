import Button from "../components/button.jsx";
import IconButton from "../components/iconButton.jsx";

function HomePage() {
    return (
      <div className="con" id="home">
        <h1 className="poppins-Main-Heading">
          Welcome to the Home <span style={{ color: '#FF7D00' }}>Page</span>
        </h1>
        <p className="poppins-Sub-Heading">This is a simple React component.</p>
        
        <br />
        <div className="grid grid-cols-3 gap-4 place-items-center ">
        <Button text="Front-end" />
        <Button text="UI/UX" />
        <Button text="Back-end" />
        </div>
        <br />
        <IconButton />
      </div>
    );
  }
  
  export default HomePage;