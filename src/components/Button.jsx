import "../stylesheets/Button.css";

function Button (props){
    const isOperator = (val)=>{
        return isNaN(val) && (val != ".") && (val != "=");
    }
    return(
        <button onClick={()=>props.addInput(props.children)} className={`button-container ${isOperator(props.children) ? 'operator': ""}`.trimEnd()}>
            { props.children }
        </button>
    );
}

export default Button;