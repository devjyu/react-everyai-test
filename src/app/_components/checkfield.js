export default function CheckboxField({ className, label }) {
  return(
    <div className="join-agree-detail">
        <div className="join-agree-detail-title">{label}</div>
        <input type="checkbox" className={className} label={label} />
    </div>
  ); 
}
