import "./iconButton.css";


function iconButton({ github, facebook, linkedin }){
    return (
        <div>

          {github && (
            <button className="icon-btn" onClick={() => window.open("https://github.com", "_blank")}>
              {github}
            </button>
          )}

          {facebook && (
            <button className="icon-btn" onClick={() => window.open("https://facebook.com", "_blank")}>
              {facebook}
            </button>
          )}

          {linkedin && (
             <button className="icon-btn" onClick={() => window.open("https://linkedin.com", "_blank")}>
              {linkedin}
            </button>
          )}

        </div>

        
    )
};

export default iconButton;