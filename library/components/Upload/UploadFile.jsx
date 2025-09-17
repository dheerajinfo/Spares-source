import React from "react";

function UploadFile({ file, onDelete, className = "", iconColor = "black" }) {
  const link = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.58766 10.7814L6.26477 12.1043V12.1043C5.53416 12.8349 4.34961 12.8349 3.619 12.1043C3.38842 11.8737 3.1584 11.6437 2.95756 11.4429V11.4429C1.86165 10.347 1.86165 8.57014 2.95756 7.47423L4.28045 6.15135C5.37636 5.05543 7.15319 5.05543 8.2491 6.15135V6.15135"
        stroke={iconColor}
        strokeLinecap="round"
      />
      <path
        d="M6.42528 3.23156L7.74817 1.90868V1.90868C8.47878 1.17807 9.66333 1.17807 10.3939 1.90868L11.0554 2.57012C12.1513 3.66603 12.1513 5.44286 11.0554 6.53877L9.73249 7.86166C8.63658 8.95757 6.85975 8.95757 5.76384 7.86165V7.86165"
        stroke={iconColor}
        strokeLinecap="round"
      />
    </svg>
  );

  const icon = (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.60001 5L4.20001 13.8H5.80001H9.00001H12.2H13.8L15.4 5"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 3.4H5.8M17 3.4H12.2M5.8 3.4H9H12.2M5.8 3.4V2C5.8 1.44772 6.24772 1 6.8 1H11.2C11.7523 1 12.2 1.44771 12.2 2V3.4"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex items-center gap-3">
      <p className={`flex flex-row items-center gap-1 ${className}`}>
        {link} {file ? `Selected file: ${file.name}` : "No file chosen"}
      </p>

      {file && (
        <button
          type="button"
          onClick={onDelete}
          className="p-0 rounded-full"
          title="Remove file"
        >
          {icon}
        </button>
      )}
    </div>
  );
}

export default UploadFile;
