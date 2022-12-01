import { useEffect } from "react";

export function useExternalScript (url) {

    useEffect(() => {
        const headEl = document.querySelector('head');
        const scriptEl = document.createElement('script');
        
        scriptEl.setAttribute("src", url);
        headEl.appendChild(scriptEl);

        return () => {
            document.removeChild(scriptEl);
        }
    }, [url]) 
}