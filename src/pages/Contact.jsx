import useIntersectionObserver from "../hooks/useIntersectionObserver.jsx";
import IconButton from "../components/iconButton.jsx";
import GoogleIcon from "../assets/images/google.png";


function ContactPage() {
    useIntersectionObserver();
    return (
      <div className="con" id="contact">
        
        <div>  

          <div className="flex flex-col justify-center items-center" style={{marginBottom: "10px"}}>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center max-w-6xl mx-auto px-6 gap-4 h-screen w-full">

              <div className="hiddens p-4 flex justify-center">
                <img src="/innov_contact.png" alt="logo" className="w-64 sm:w-80 md:w-96 h-auto" />
              </div>

              <div className="hiddens text-center md:text-left p-4">

                <h1 className="text-3xl md:text-5xl font-bold poppins-Main-Heading">
                  Contact <span style={{ color: "#FF7D00" }}>Us</span>
                </h1>

                <h2 style={{marginTop: "10px"}} className="mt-4 text-lg sm:text-xl md:text-2xl poppins-Section-Titles w-90">
                  We are InnovIT, a team that you can reach out to for any inquiries or collaborations throught our social media platforms.
                </h2>
                
                <div style={{marginTop: "10px"}} className="grid grid-cols-6">
                  <IconButton  github={<img src={GoogleIcon} alt="Google" onClick={() => window.open("mailto:innovitsvpport@gmail.com?subject=Support%20Inquiry&body=Hello%2C%20I%20need%20help%20with...", "_blank")}

                  />} />
                  
                </div>

              </div>
                
            </div>
          </div>  

        </div>

      </div>
    );
  }
  
  export default ContactPage;