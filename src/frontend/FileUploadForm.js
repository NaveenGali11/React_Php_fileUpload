import React from 'react';

const FileUploadForm = () => {
    return(
        <form action="script.php" method="post" encType="multipart/form-data">
            <input type="file" name="fileToUpload" />
            <input type="submit" value="Upload" />
        </form>
    )
}

export default FileUploadForm;