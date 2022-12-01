import { useEffect } from "react";

export function useExternalScript (url, head, scriptTag) {
    
    useEffect(() => {
        const headEl = document.querySelector(head);
        const scriptEl = document.createElement('script');
        scriptEl.setAttribute("src", url);
        headEl.appendChild(scriptEl);

        if (scriptTag) {
            headEl.appendChild(scriptTag);
        }

        return () => {
            document.removeChild(headEl);
        }
    }, [url]) 
}