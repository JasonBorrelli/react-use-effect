import { useState, useEffect } from "react";

export default function NotePad() {

    const [text, setText] = useState(() => {
        const savedNote = localStorage.getItem('note');
        return savedNote ? JSON.parse(savedNote) : '';
    });

    const handleTextAreaChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
        console.log(text.length);

    }
     
    useEffect(() => { 
        localStorage.setItem('note', JSON.stringify(text))
    }, [text]);

    return(
        <section className="container text-center bg-amber-200">
            <textarea placeholder="Scrivi una nota..." 
                value={text}
                onChange={handleTextAreaChange}
                rows="10" 
                cols="60">
            </textarea>      
            <p>Conteggio caratteri: {text.length}</p>  
        </section>  
    );
}
