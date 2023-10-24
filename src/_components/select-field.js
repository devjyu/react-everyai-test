export default function SelectField({ className, placeholder, options }) {
  return (
    <select className={className} placeholder={placeholder}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};