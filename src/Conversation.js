import Wrapper from './Wrapper.js';

export default function Conversation({ prompts }) {
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
            {prompts.map((prompt, index) => {
                return (
                    <Wrapper key = {index}>{prompt}</Wrapper>
                );
            })}
        </div>
    );
}


// for prompt in prompts ==> render a Wrapper item with its child as the prompt 

/*
    {prompts.map((prompt, index) => (
        <Wrapper id={index}>{prompt}<Wrapper>
    ))}
*/

// {questions.map((question, index) => {
//     <div>{question}</div>
// })}