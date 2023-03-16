import { useState } from 'react';
import './Input.css';

export default function Input({prompts, setPrompts }) {

    const [prompt, setPrompt] = useState('');

    function sendInfo(e) {
        e.preventDefault();
        setPrompt("");
        setPrompts([prompt, ...prompts]); 
    }

    return (
        <form className = "input-holder" >
            <input 
                type = "text" 
                className = "text-entry"
                value = {prompt}
                onChange = {e => setPrompt(e.target.value)}
            />
            <button type = "submit" onClick = {sendInfo} className = "enter-button">
                <span className="material-symbols-outlined arrow">arrow_forward</span>
            </button>
        </form>
    );
}