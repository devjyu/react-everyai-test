export default function EmailInput({type, className, placeholder, value, onChange}) {
    return (
        <>
            <input type={type} value={value} className={className} placeholder={placeholder} onChange={onChange} />
        </>
    );
}