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
