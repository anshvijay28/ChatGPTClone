export default function Wrapper({ children }) {
    return (
        <div style = {{
            backgroundColor: "#459595",
            borderRadius: "4vh",
            width: "70vw",
            padding: "1rem"
        }}>
            { children }
        </div>
    );  
}