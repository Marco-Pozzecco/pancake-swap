
// Accetta una stringa che rappresenta un selettore CSS, ritorna tutti gli elementi che soddisfano quel selettore
export function getAllElements(str) {
        return document.querySelectorAll(str);
}

// Accetta una stringa che rappresenta un selettore CSS, ritorna il primo elemento che soddisfa quel selettore
export function getElement(str) {
        return document.querySelector(str);
}