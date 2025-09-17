function Tag({ 
  children,
  className = ""
}) {
  return (
    <p
      className={`px-2 py-1 flex items-center justify-center gap-2 rounded ${className}`}
    >
      {children}
    </p>
  );
}
export default Tag;
