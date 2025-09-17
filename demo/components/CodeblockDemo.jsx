import React, { useState } from "react";
import CodeBlock from "../../library/components/Codeblock/CodeBlock";
import CodeBlockHeader from "../../library/components/Codeblock/CodeBlockHeader";

function CodeblockDemo({ iconSize = 12 }) {
  const codeTabs = [
    { label: "html", code: "<h1>Hello World</h1>" },
    { label: "javascript", code: "console.log('Hello World')" },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeTabs[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <CodeBlockHeader
        codeTabs={codeTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        iconSize={iconSize}
        copied={copied}
        handleCopy={handleCopy}
        className='lg:w-96 bg-black'
      />
      <CodeBlock
        codeTabs={codeTabs}
        activeTab={activeTab}
        language={codeTabs[activeTab].label.toLowerCase()}
        showLineNumbers
        borderTopLeftRadius="0"
        borderTopRightRadius="0"
        borderBottomRightRadius="4"
        borderBottomLeftRadius="4"
        className='lg:max-w-96 sm:max-w-56'
        backgroundColor="black"
      />
    </div>
  );
}

export default CodeblockDemo;
