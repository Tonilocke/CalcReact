import '../stylesheets/Clear.css';
const Clear = (props)=>{
    return(
        <button className="clear-button" onClick={()=>props.clearInput()}>
            { props.children }
        </button>
    );
}

export default Clear;