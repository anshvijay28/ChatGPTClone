import Wrapper from './Wrapper.js';

export default function Conversation({ prompts }) {

    let newPrompts = [];

    for (let i = 0; i < prompts.length; i++) {
        if (i % 2 === 0) {
            newPrompts = [prompts[i], prompts[i + 1], ...newPrompts];
        }
    }

    return (
        <div 
            className = "wrapper-container" 
            style = {{
                position: "absolute",
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center",
                left: "15vw",
                top: "20vh",
                gap: "2vh",
                borderColor: "white",
                overflow: "auto",
            }}>
            {newPrompts.map((prompt, index) => {
                if (index % 2 === 0) {
                    return (
                        <Wrapper key = {index} bgColor = "#459595" textColor = "white" >{prompt}</Wrapper>
                    );
                } else {
                    return (
                        <Wrapper key = {index} bgColor = "#1ecbe1" textColor = "black" >{prompt}</Wrapper>
                    );
                }
            })}
        </div>
    );
}