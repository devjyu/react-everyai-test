export default function SelectField({ className, placeholder, options, value, onChange }) {
    if (!options) {
        return null; // 옵션이 없는 경우 아무것도 렌더링하지 않음
    }
    return (
        <select className={className} placeholder={placeholder} value={value} onChange={onChange}>
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