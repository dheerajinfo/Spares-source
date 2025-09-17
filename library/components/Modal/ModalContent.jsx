import React from 'react';

function ModalContent({ children, className = '' }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`relative min-w-max h-fit flex flex-col justify-start items-start gap-4 text-sm z-50 rounded-4 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default ModalContent;
