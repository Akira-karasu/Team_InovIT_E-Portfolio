import "./button.css";


function TextTags({ large, medium }) {
    return (
        <div>
            
            {large && (
                 <ul className="flex flex-wrap gap-2 justify-center">
                 {large.map((item, index) => (
                   <li
                     key={index}
                     className="custom-button"
                   >
                     {item}
                   </li>
                 ))}
               </ul>            
             
            )}

            {medium && (
                    <ul className="flex flex-wrap gap-2 justify-center">
                    {medium.map((item, index) => (
                      <li
                        key={index}
                        className="custom-button"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>  
            )}

        </div>

        
    )
};

export default TextTags;