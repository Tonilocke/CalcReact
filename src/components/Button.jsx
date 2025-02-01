function Button (props){
    const isOperator = (val)=>{
        return isNaN(val) && (val != ".") && (val != "=");
    }
    return(
        <div className={`button-container${isOperator(props.children) ? 'operator': null }`}>
            { props.children }
        </div>
    );
}

export default Button;