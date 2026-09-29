import { useState } from "react";


export default function NotePad() {

    const [text, setText] = useState('');

    const handleTextAreaChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
        console.log(text.length);
    }

    return(
        <>
        <textarea placeholder="Scrivi una nota..." 
            value={text}
            onChange={handleTextAreaChange}
            rows="30" 
            cols="60">
        </textarea>      
        <p>Conteggio caratteri: {text.length}</p>  
        </>
    );
}
