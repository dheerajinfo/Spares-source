import React from "react";
import { cn } from "../../utils/cn";

function TableEmpty({ icon, message = "No data to show", colSpan = 5, className = "" }) {
  const defaultIcon = (
    <svg
      width="66"
      height="74"
      viewBox="0 0 66 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 73H61C63.2091 73 65 71.2091 65 69V37V20.5208C65 19.5411 64.6405 18.5955 63.9896 17.8633L50.1934 2.34254C49.4343 1.48859 48.3463 1 47.2037 1H33H5C2.79086 1 1 2.79086 1 5V69C1 71.2091 2.79086 73 5 73Z"
        fill="#1F1F23"
        stroke="#1F1F23"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 25H17" stroke="white" strokeLinecap="round" />
      <path d="M13 41H39" stroke="white" strokeLinecap="round" />
      <path d="M13 57H23" stroke="white" strokeLinecap="round" />
      <path
        d="M65.0001 19L49.0001 1L49 17C49 20.493 49.9674 23.267 53.0001 25C57.5492 27.5995 65.0001 19 65.0001 19Z"
        fill="#626164"
        stroke="#626164"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <tr>
      <td colSpan={colSpan} className={cn("py-10 text-center", className)}>
        <div className="flex flex-col items-center justify-center text-opacity-40 text-tiny">
          {icon || defaultIcon}
          <p className="mt-4 mb-8">{message}</p>
        </div>
      </td>
    </tr>
  );
}

export default TableEmpty;
