import React from "react";

function CodeBlockHeader({ codeTabs, activeTab, onTabChange, iconSize = 12, copied, handleCopy, className = '' }) {
   const copyIcon = (
    <svg width='14' height='16' viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.375 2.5H11C12.1046 2.5 13 3.39543 13 4.5V14C13 15.1046 12.1046 16 11 16H3C1.89543 16 1 15.1046 1 14V4.5C1 3.39543 1.89543 2.5 3 2.5H3.625" stroke="white" strokeLinecap="round"/>
      <rect x="4.75" y="1" width="4.5" height="2.25" rx="0.5" stroke="white"/>
    </svg>
  );

  const doneIcon = (
    <svg width='10' height='12' viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.28099C1 5.28099 1.81593 6.60287 2.18382 6.99338C2.40755 7.23086 8 1 8 1" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <div className={`h-12 border-b border-white/5 bg-surface rounded-t-md flex items-center justify-between px-4 bg-black ${className}`}>

      <div className="flex items-center gap-6">
        {codeTabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => onTabChange(index)}
            className={`flex items-center gap-2 text-base ${
              activeTab === index ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {tab.icon && (
              <span
                className="flex items-center justify-center"
                style={{ width: iconSize, height: iconSize }}
              >
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <button
        className="text-white bg-elevation flex items-center justify-center p-2 rounded-full text-xs"
        onClick={handleCopy}
      >
        {copied ? doneIcon : copyIcon}
      </button>
    </div>
  );
}

export default CodeBlockHeader;
