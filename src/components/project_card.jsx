
function ProjectCard(props) {
    return(
        <div>
           <div style={{width: "450px",height: "210px"}} className="flex bg-[#323232] rounded-[12px] border border-[#515151] text-white  shadow-lg overflow-hidden">
                {/* Left - Image */}
                <div className="w-1/2 bg-white flex items-center justify-center p-4" style={{marginRight: "10px"}}>
                  <img style={{height:"210px",width:"220px"}} src={props.img} alt="img"/>
                </div>

                {/* Right - Content */}
                <div className="w-1/2 p-4" style={{marginLeft: "4px"}}>

                    <h1 className="poppins-Sub-Heading">
                        <span style={{ color: "FFFFFF",fontSize: "20px" }}>{props.title}</span>
                    </h1>

                    <p style={{ color: "#FBAE3C",fontSize: "12px", marginTop:"1px", marginBottom:"2px" }} className="poppins-Body-Text">Description</p>
                    
                        <p style={{marginBottom:"1px" }} className="poppins-Body-Text-[7px] text-center-[1px]">{props.description}</p>


                    <p style={{ color: "#FBAE3C", fontSize: "12px", marginBottom:"2px" }} className="poppins-Body-Text m-5">Technologies used</p>
                        {props.Button}
                        
                
                    <p style={{ color: "#FBAE3C", fontSize: "12px", marginBottom:"2px" }} className="poppins-Body-Text">Link</p>
                        {props.github}
                </div>
            </div>

        </div>
    );
}

export default ProjectCard;