const ErrorMessage = ({message}) => {
    if(message){
        return <p className="text-sm mt-1 font-poppin text-red-500">{message}</p>;
    }
};

export default ErrorMessage;
