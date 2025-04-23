import "./iconButton.css";

function iconButton({ github, facebook, linkedin, githubTP, google }) {
    return (
        <div>

          {github && (
            <button className="icon-btn" onClick={() => window.open("https://github.com", "_blank")}>
              {github}
            </button>
          )}

          {githubTP && (
            <button className="TP-btn" onClick={() => window.open("https://github.com", "_blank")}>
              {githubTP}
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

          {google && (
            <button className="icon-btn" onClick={() => window.open("https://google.com", "_blank")}>
              {google}
            </button>
          )}

        </div>

        
    )
};

export default iconButton;