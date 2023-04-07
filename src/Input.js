import { useState } from 'react';
import './Input.css';

export default function Input({prompts, setPrompts }) {

    const [prompt, setPrompt] = useState('');

    //API_KEY = apikey goes here

    async function getGPTResponse(prompts) {
        let apiPrompts = prompts.map((prompt, index) => {
            let role = "";
            if (index % 2 === 0) {
                role = "user";
            } else {
                role = "assistant"
            }
            return { role: role, content: prompt };
        });
        const systemMessage = {
            role: "system",
            content: "Explain things as if you are ChatGPT an open source chat bot " + 
            "that will answer all questions and inquiries in any manner specified."
        }
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [systemMessage, ...apiPrompts],
            "temperature": 0.7,
        }
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiRequestBody)
            });
            const data = await response.json();
            const gptResponse = data.choices[0].message.content;
            setPrompts([...prompts, gptResponse]);
        } catch(error) {
            console.error("Error: ", error);
        }
    }

    async function sendAndReceiveInfo(e) {
        e.preventDefault();
        const newPrompts = [...prompts, prompt];
        setPrompt("");
        setPrompts(newPrompts);
        await getGPTResponse(newPrompts);
    }

    return (
        <form className = "input-holder" >
            <input 
                type = "text" 
                className = "text-entry"
                value = {prompt}
                onChange = {e => {
                    setPrompt(e.target.value);
                }}
            />
            <button type = "submit" onClick = {sendAndReceiveInfo} className = "enter-button">
                <span className="material-symbols-outlined arrow">arrow_forward</span>
            </button>
        </form>
    );
}