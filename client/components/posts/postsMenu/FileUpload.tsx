import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import "./FileUpload.css";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  const handleSubmit = (files, allFiles) => {
    setFiles(files.map((f) => f.file));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div>
      <Dropzone
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,video/*"
        inputContent="Drop files here or click to upload"
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 },
          dropzoneActive: { borderColor: "green" },
        }}
      />
      <div className="file-preview-container">
        {files.map((file, index) => {
          const url = URL.createObjectURL(file);
          return file.type.startsWith("image/") ? (
            <img
              key={index}
              src={url}
              alt={file.name}
              className="file-preview"
            />
          ) : file.type.startsWith("video/") ? (
            <video key={index} src={url} controls className="file-preview" />
          ) : (
            <div key={index} className="file-preview">
              {file.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUpload;