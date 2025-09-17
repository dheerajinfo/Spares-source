import React, { useState, useRef } from 'react';
import Upload from '../../library/components/Upload/Upload';
import UploadButton from '../../library/components/Upload/UploadButton';
import UploadFile from '../../library/components/Upload/UploadFile';

function UploadDemo() {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null); 

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleDelete = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = ''; 
    }
  };

  return (
    <Upload className="flex flex-col w-fit items-center gap-2">
      <UploadButton
        ref={inputRef}             
        label="Import"
        onFileChange={handleFileChange}
        className = 'bg-black text-white'
      />
      <UploadFile
        file={file}
        onDelete={handleDelete}  
        className='text-sm'
        iconColor = 'white'
      />
    </Upload>
  );
}

export default UploadDemo;
