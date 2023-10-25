export default function InputField({type, className, placeholder}) {
    return (
        <>
            <input type={type} className={className} placeholder={placeholder} />
        </>
    );
}