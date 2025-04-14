// AboutSection.jsx

function AboutSection_left() {
    return (
        <div className="hiddens flex flex-row justify-center items-center gap-5" style={{marginBottom:"25px"}}>
            <img
                className="bg-[#323232] rounded-[12px] border border-[#515151] h-1/2 w-1/2  "
                src="/TeamMembers.png"
                alt="team"
            />
            <div>
                <h2 className="poppins-Sub-Heading" style={{ color: "#FF7D00" }}>
                Description of expertise and focus areas                </h2>
                <p className="poppins-Section-Titles">
                Join us as we explore innovation, creativity, and opportunities—step inside and discover what makes Innov-IT stand out.                </p>
            </div>
        </div>
    );
}

function AboutSection_right() {
    return (
        <div className="hiddens flex flex-row justify-center items-center gap-5" style={{marginBottom:"100px"}}>
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


