import React from 'react';

function Backdrop({ className = '' }) {
  return (
    <div className={`fixed inset-0 bg-white/5 backdrop-blur-sm z-40 ${className}`}
    />
  );
}

export default Backdrop;
