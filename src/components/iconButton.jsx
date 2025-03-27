import "./iconButton.css";


function iconButton({ onClick }){
    return (
        <div className="social-buttons">

            {/* GitHub Button */}
            <button 
            className="icon-button github-icon" onClick={onClick}
            >         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M12 .296c-6.63 0-12 5.372-12 12 0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.547-1.39-1.334-1.759-1.334-1.759-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.832 2.805 1.303 3.49.996.107-.776.42-1.303.763-1.603-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.465-2.38 1.236-3.22-.124-.303-.535-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 013.003-.403c1.02.006 2.047.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.652 1.652.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.608-2.804 5.625-5.476 5.922.43.372.823 1.104.823 2.223 0 1.605-.014 2.896-.014 3.286 0 .318.192.692.798.574C20.566 22.092 24 17.597 24 12.296c0-6.628-5.372-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
            </button>

            {/* Facebook Button */}
            <button 
            className="icon-button facebook-icon " onClick={onClick}
            >         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4 -1 30 25"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M22.675 0h-21.35C.598 0 0 .598 0 1.325v21.351C0 23.402.598 24 1.325 24H12.82v-9.294H9.692V11.08h3.127V8.412c0-3.1 1.893-4.785 4.659-4.785 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.315h3.592l-.468 3.625h-3.124V24h6.116c.729 0 1.325-.598 1.325-1.324V1.325C24 .598 23.402 0 22.675 0z"
                clipRule="evenodd"
              />
            </svg>
            </button>

            {/* LinkedIn Button */}
            <button 
            className="icon-button linkedin-icon" onClick={onClick}
            >         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-100 250 650 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.49 0 53.79A53.8 53.8 0 01106.29 53.79C106.3 83.49 82.19 108.1 53.79 108.1zM447.9 448H354.9V302.4c0-34.7-.7-79.3-48.3-79.3s-55.8 37.8-55.8 76.8V448H157.9V148.9h89.1v40.8h1.3c12.4-23.4 42.7-48.3 87.8-48.3 94 0 111.3 61.9 111.3 142.3V448z"

                clipRule="evenodd"
              />
            </svg>
            </button>

    

        </div>

        
    )
};

export default iconButton;