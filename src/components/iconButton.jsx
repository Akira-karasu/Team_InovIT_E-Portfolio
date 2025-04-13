import "./iconButton.css";


function iconButton({github, facebook, linkedin }){
    return (
        <div>

          {github && (
            <button className="github-icon">
              {github}
            </button>
          )}

          {facebook && (
            <button className="facebook-icon">
              {facebook}
            </button>
          )}

          {linkedin && (
             <button className="linkedin-icon">
              {linkedin}
            </button>
          )}

        </div>

        
    )
};

export default iconButton;