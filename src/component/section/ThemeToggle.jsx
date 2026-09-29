import { useState, useEffect } from "react";

export default function ThemeToggle() {

const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || "light";
}); 

useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

}, [theme]);

function toggleTheme() {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
}   

    return(
        <section className="container mx-auto text-center bg-amber-200 m-5">
           <button
            onClick={toggleTheme}
           className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"}`}
            >
            Passa a {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
           </button>
            
        </section>
    );
}   