
function Textarea({
  value,
  onChange,
  placeholder = "Your Message",
  rows = 10,
  cols = 30,
  disabled = false,
  className = "",
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      disabled={disabled}
      className={`border border-white/10 shadow-none rounded tracking-widest default:border-white default:shadow-none disabled:border disabled:border-black/5
      ${className}`}
    />
  );
}

export default Textarea;
