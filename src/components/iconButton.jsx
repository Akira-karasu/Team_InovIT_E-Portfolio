import "./iconButton.css";


<<<<<<< HEAD
function iconButton({github, facebook, linkedin }){
=======
function iconButton({ github, facebook, linkedin }){
>>>>>>> 561bb52b0cd2090dd0c716dfd497667b3233c468
    return (
        <div>

          {github && (
            <button className="icon-btn" onClick={() => window.open("https://github.com", "_blank")}>
              {github}
            </button>
          )}

          {facebook && (
<<<<<<< HEAD
            <button className="facebook-icon">
=======
            <button className="icon-btn" onClick={() => window.open("https://facebook.com", "_blank")}>
>>>>>>> 561bb52b0cd2090dd0c716dfd497667b3233c468
              {facebook}
            </button>
          )}

          {linkedin && (
<<<<<<< HEAD
             <button className="linkedin-icon">
=======
             <button className="icon-btn" onClick={() => window.open("https://linkedin.com", "_blank")}>
>>>>>>> 561bb52b0cd2090dd0c716dfd497667b3233c468
              {linkedin}
            </button>
          )}

        </div>

        
    )
};

export default iconButton;