import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({
  codeTabs,
  activeTab = 0,
  backgroundColor = "#0c0c0f",
  fontSize = "1rem",
  maxHeight = "400px",
  language,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  showLineNumbers = false,
  className
}) {
  return (
    <div className={`${className}`}>
      <div className="codeblock-container">
        <div
          className="codeblock-content hide-scrollbar"
          style={{ maxHeight }}
        >
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            wrapLongLines={false}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: "1rem",
              backgroundColor,
              fontSize,
              width: "100%",
              minWidth: "max-content",
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomRightRadius,
              borderBottomLeftRadius,
            }}
          >
            {codeTabs[activeTab].code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default CodeBlock;
