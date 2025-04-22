import "./button.css";


function Tags({ text, tags, done, ongoing }) {
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

            {done && (
                <button className="done-button">
                  {done}
                </button>
            )}

            {ongoing && (
                <button className="ongoing-button">
                  {ongoing}
                </button>
            )}

        </div>

        
    )
};

export default Tags;