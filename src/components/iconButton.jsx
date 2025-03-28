import "./iconButton.css";


function iconButton({ onClick, github, facebook, linkedin }){
    return (
        <div>

          {github && (
            <button className="github-icon">
              {github}
            </button>
          )}

          {facebook && (
            <button className="facebook-icon" onClick={() => window.open("https://facebook.com", "_blank")}>
              {facebook}
            </button>
          )}

          {linkedin && (
             <button className="linkedin-icon" onClick={() => window.open("https://linkedin.com", "_blank")}>
              {linkedin}
            </button>
          )}

        </div>

        
    )
};

export default iconButton;