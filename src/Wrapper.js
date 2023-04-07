export default function Wrapper({ children, bgColor, textColor }) {
    return (
        <div style = {{
            backgroundColor: bgColor,
            color: textColor,
            borderRadius: "4vh",
            width: "70vw",
            padding: "1rem"
        }}>
            { children }
        </div>
    );  
}