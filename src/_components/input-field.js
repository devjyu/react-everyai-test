export default function InputField({type, id, placeholder, name, value, onChange}) {
    return (
        <>
            <input type={type} id={id} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </>
    );
}