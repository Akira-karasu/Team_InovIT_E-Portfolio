import "./button.css";


function Tags({ text, tags }) {
    return (
        <div>
            
            {text && (
                <button className="custom-button">
                  {text}
                </button>
            )}

            {tags && (
                <button className="tags-button">
                  {tags}
                </button>
            )}

        </div>

        
    )
};

export default Tags;