export default function CheckboxField({ className, label, checked, onChange, name, value }) {
  return(
    <div className="join-agree-detail">
        <div className="join-agree-detail-title">{label}</div>
        <input type="checkbox" className={className} label={label} name={name} checked={checked} onChange={onChange} value={value} />
    </div>
  ); 
}
