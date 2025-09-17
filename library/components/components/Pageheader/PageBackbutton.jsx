import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageBackbutton({ className = '', children }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`text-sm h-8 hover:bg-opacity-80 transition ${className}`}
    >
        {children}
    </button>
  );
}

export default PageBackbutton;
