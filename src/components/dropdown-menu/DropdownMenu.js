import React from "react";

export function DropdownMenu(props) {
    if (!props.open) return null;
    

    return (
        <div>
            <ul>
                {props.elements.map((element) => {
                    return <li>{element}</li>;
                })}
            </ul>
            {/* className="menu-ul menu-nav dropdown"  */}
        </div>
    );
}

// const [selected, setSelected] = useState({...props[0]})
// const [openDropdown, setDropdown] = useState(false)

// if (!props.open) return null;

// return (
//     <div>
//         <ul>
//             {props.elements.map((element) => {
//                 return <div>
//                         <li onClick={()=> {setSelected(element); setDropdown(false)}}>{element}</li>;
//                             <p>{selected.props}</p>
//                     </div>
//             })}
//         </ul>
//         {/* className="menu-ul menu-nav dropdown"  */}
//     </div>
// );
