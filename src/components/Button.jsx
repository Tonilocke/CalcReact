import "../stylesheets/Button.css";

function Button (props){
    const isOperator = (val)=>{
        return isNaN(val) && (val != ".") && (val != "=");
    }
    return(
        <div onClick={()=>props.setInput(props.input + props.children)} className={`button-container ${isOperator(props.children) ? 'operator': ""}`.trimEnd()}>
            { props.children }
            {console.log(props.input)}
        </div>
    );
}

export default Button;