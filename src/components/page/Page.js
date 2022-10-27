import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export function Page (props) {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}