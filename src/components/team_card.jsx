import IconButton from "../components/iconButton.jsx";
import GitHubIcon from "../assets/images/github.png";
import FacebookIcon from "../assets/images/facebook.png";
import LinkdinIcon from "../assets/images/linkedin.png";
import TextTags from "./text_tag.jsx";



function TeamCard(props) {
    return (
        <div
            style={{
                width: "300px",
                height: "auto",
                position: "relative",
                padding: "25px",
            }}
            className="hiddens bg-[#323232] rounded-[12px] border border-[#515151] text-white shadow-lg overflow-hidden"
        >
            {/* Shape Divider */}
            <div
                className="custom-shape-divider-top-1744791013"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 0,
                }}
            >
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
                        70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,
                        512.34,53.67,583,72.05c69.27,18,138.3,24.88,
                        209.4,13.08,36.15-6,69.85-17.84,104.45-29.34,
                        114.64-30.79,238.15-70.08,325.15-3.32V0Z"
                        opacity=".25"
                        className="shape-fill"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,
                        72.05c51.72,39.22,117.31,38.95,176.89,19.53,
                        31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,
                        84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,
                        98.6,31.56,31.77,25.39,62.32,62,103.63,73,
                        40.44,10.79,81.35-6.69,119.13-24.28,
                        37.78-17.59,75.16-39,116.92-43.05,
                        59.73-5.85,113.28,22.88,168.9,38.84,
                        30.2,8.66,59,6.17,87.09-7.5,
                        22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        className="shape-fill"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,
                        475.83,42.57c43-7.64,84.23-20.12,
                        127.61-26.46,59-8.63,112.48,12.24,
                        165.56,35.4,59.93,25.71,118,43.73,
                        183.2,38.49,86.53-7,172.46-45.71,
                        248.8-84.81V0Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>

            {/* Card Content */}
            <div
                className="card flex flex-col justify-center items-center text-center gap-2"
                style={{ zIndex: 1, position: "relative", marginBottom:"30px" }}
            >
                <img
                    src={props.picture}
                    alt="memberPic"
                    style={{
                        width: "190px",
                        height: "190px",
                        border: "10px solid #292C2E",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                />
                <h1 className="poppins-Section-Titles">{props.name}</h1>
                <h2 className="poppins-Caption"><span style={{ color: '#FF7D00' }}>{props.role}</span></h2>
                <h3 className="poppins-Link">Skills and expertise</h3>
                <TextTags large={props.expertise}/>
                <h3 className="poppins-Link">Social media</h3>
                <div className="flex justify-center items-center gap-2">
                    <IconButton  github={<img src={GitHubIcon} alt="GitHub" onClick={() => window.open(props.github, "_blank")}/>} />
                    <IconButton  facebook={<img src={FacebookIcon} alt="Facebook" onClick={() => window.open(props.facebook, "_blank")}/>} />
                    <IconButton  linkedin={<img src={LinkdinIcon} alt="Linkdin" onClick={() => window.open(props.linkdin, "_blank")}/>} />
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
