import "./button.css";


function Button({ text = "title", onClick }){
    return (
        <div>

            <button 
            className="custom-button"
            onClick={onClick}
            >
            {text}
            </button>

    

        </div>

        
    )
};

export default Button;