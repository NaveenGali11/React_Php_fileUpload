import React from 'react';
import { Button } from 'react-bootstrap';

const FileUploadForm = () => (
  <form
    action="script.php"
    method="post"
    encType="multipart/form-data"
    style={{ marginTop: '50px', alignItems: 'center' }}
  >
    <div
      style={{
        border: '1px dotted',
        padding: '25px',
        marginLeft: '15px',
        marginRight: '15px',
      }}
    >
      <input type="file" name="fileToUpload" />{' '}
    </div>
    <br /> <br />
    <div>
      <Button type="submit" value="Upload" className="btn btn-success">
        Upload
      </Button>
    </div>
  </form>
);

export default FileUploadForm;
