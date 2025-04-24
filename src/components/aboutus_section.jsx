import "./about_section.css";

function AboutSection_left() {
    return (
        <div className="about-us-section hiddens flex flex-row justify-center items-center gap-5" style={{marginBottom:"25px"}}>
            <img
                className="bg-[#323232] rounded-[12px] border border-[#515151] h-1/2 w-1/2"
                src="/groupic.png"
                alt="team"
            />
            <div>
                <h2 className="poppins-Sub-Heading" style={{ color: "#FF7D00" }}>
                Description of expertise and focus areas
                </h2>
                <p className="poppins-Section-Titles">
                As aspiring IT professionals, we've been doing more than writing code—we're creating digital solutions. From concept to completion, we develop websites and applications that blend front-end design with back-end functionality. We've explored various programming languages, dynamic scripting, and client-server interactions to build systems that solve problems and simplify everyday life through technology.
                </p>
            </div>
        </div>
    );
}

function AboutSection_right() {
    return (
        <div className="about-us-section right-layout hiddens flex flex-row justify-center items-center gap-5" style={{marginBottom:"100px"}}>
            <div>
                <h2 className="poppins-Sub-Heading" style={{ color: "#FF7D00" }}>
                    Team Background and Purpose
                </h2>
                <p className="poppins-Section-Titles">
                    Hello! We are InnovDescription of expertise and focus areas-IT—a dynamic team of five, each with our own expertise across different areas of Information Technology. Through this portfolio website, we proudly showcase the milestones we’ve achieved while sharpening our skills in various programming languages during our journey as BSIT students at CvSU-Imus Campus.
                </p>
            </div>
            <img
                className="bg-[#323232] rounded-[12px] border border-[#515151] h-1/2 w-1/2 "
                src="/TeamMembers.png"
                alt="team"
            />
        </div>
    );
}


export { AboutSection_left, AboutSection_right };


