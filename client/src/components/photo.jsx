import { useRef, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import '../styles/photo.css';

export default function Photo({ desc,color }) {
  const fileInputRef = useRef();
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div className="photo-upload-wrapper">
      <label className="photo-label">
        {desc} <span className="required">*</span>
      </label>

      <div className="upload-box" onClick={handleClick}>
        <FaUpload className="upload-icon" />
        <p className="upload-text" style={{color:color}}>Click to upload a photo</p>
        <p className="upload-subtext">PNG, JPG up to 10MB</p>
        <input
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        {uploadedFile && (
          <p className="upload-success">
            ✓ <span>{uploadedFile}</span> uploaded
          </p>
        )}
      </div>
    </div>
  );
}
