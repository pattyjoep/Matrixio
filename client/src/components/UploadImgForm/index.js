import React from "react";
import "./style.css";
import "./upload.php";

function UploadImgForm() {
  return (
    <div>
      <form action="upload.php" method="post" enctype="multipart/form-data">
        <h4>Select image to upload:</h4>
        <br />
        <input type="file" name="fileToUpload" id="fileToUpload" />
        <br />
        <button type="submit" value="Upload Image" name="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
export default UploadImgForm;
