import { useRef } from "react";
import "./_reactGridLayout.scss";

export function ReactGridLayout () {
    
    const _gridRef = useRef();
    console.log(_gridRef);

    function getGridColumns() {
        
    } 

    return <div ref={_gridRef} className="gridLayout">props.children</div>
}