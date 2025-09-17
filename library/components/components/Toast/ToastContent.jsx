import React from 'react';

function ToastContent({ children, className = '' }) {
  return (
    <div className={`p-4 min-w-max rounded-4 fixed bottom-10 right-10 mt-2 z-50 ${className}`}>
      {children}
    </div>
  );
}

export default ToastContent;
