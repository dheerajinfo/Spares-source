import React, { useState, useEffect } from 'react';

function ToastButton({
  label,
  className = '',
  children,
  onClick = () => {}
}) {
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    if (notify) {
      const timer = setTimeout(() => {
        setNotify(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notify]);

  return (
    <div className="relative inline-block">
      <button
         onClick={() => {
            onClick(); 
            setNotify(true);
        }}
        className={`flex items-center justify-center gap-3 px-5 h-8 text-sm font-normal tracking-wide rounded transition hover:bg-opacity-90 ${className}`}
      >
        {label}
      </button>

      {notify && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default ToastButton;
