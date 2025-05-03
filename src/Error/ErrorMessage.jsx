function ErrorMessage(props){

    const message = <h2 style={{textAlign: "center"}}>{props.errorMsg}</h2>

    return(
        props.isError ? message : null
    );
}

export default ErrorMessage;