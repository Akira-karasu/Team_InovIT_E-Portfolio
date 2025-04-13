import "./button.css";


function Tags({ text = "title"}){
    return (
        <div>
            <button 
            className="custom-button"
            >
            {text}
            </button>
        </div>

        
    )
};

export default Tags;