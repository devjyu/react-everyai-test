export default function SelectFields({ className, placeholder, options, value, onChange,name }) {
    if (!options) {
        return null; // 옵션이 없는 경우 아무것도 렌더링하지 않음
    }
    return (
        <select className={className} placeholder={placeholder} value={value} onChange={onChange} name={name}>
            <option value="" selected disabled>
                {placeholder}
            </option>
            {options.map((option) => (
                <option key={option.idx} value={option.idx}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};