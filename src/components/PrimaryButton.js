

const btn = ({className,type,disabled,children})=>{
    return (
        <button 
        className={"button-primary " + className} 
        type={type} 
        disabled={disabled}
      >
        {children}
      </button>
    );
}

export default btn;