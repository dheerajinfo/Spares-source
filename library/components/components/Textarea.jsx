
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
      className={`shadow-none rounded tracking-widest default:border-white default:shadow-none disabled:border disabled:border-black/5 focus:shadow-none focus:border-white focus:placeholder-white
      ${className}`}
    />
  );
}

export default Textarea;
