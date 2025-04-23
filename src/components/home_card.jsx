function HomeCard(props) {
    return(
        <div className="hiddens bg-[#323232] rounded-[12px] border border-[#515151] flex flex-col justify-start place-items-center gap-4 w-100" style={{padding: "15px"}}>
            <img src={props.img} alt="logo" className="w-64 sm:w-25  md:w-25 h-auto" />
                <h1 className="poppins-Sub-Heading">
                    <span style={{ color: "#FBAE3C" }}>{props.title}</span>
                </h1>
            <p className="poppins-Body-Text text-center">
                {props.description}
            </p>
      </div>
    );
}

export default HomeCard;