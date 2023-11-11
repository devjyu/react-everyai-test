
export default function InputField({type, id, placeholder, name, value, onChange, disabled, onKeyDown}) {
  
    return (
        <>
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} name={name} disabled={disabled} onKeyDown={onKeyDown}/>
        </>
    );
}