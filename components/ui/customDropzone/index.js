import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <img src="images/camIcon.svg" alt="" />
        <p>Upload image here</p>
        <p>Drag and drop</p>
      </div>
      <aside>
        {/* <h4>Files</h4> */}
        <ul>{files}</ul>
      </aside>
    </div>
  );
};

export default Dropzone;
