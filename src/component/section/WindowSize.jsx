import { useState, useEffect } from "react";

export default function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleWidth(){
        if (width < 768) {
            return "Mobile";
        } else if (width >= 768 && width < 1200) {
            return "Tablet";
        } else {
            return "Desktop";
        }
    }




        useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="container mx-auto  text-center bg-info w-25 rounded-4 fw-bold">
            <p>Sei in modalità {handleWidth()}</p>
        </section>
    );
}    