import React from 'react';

const Test = () => {
    return(
        <form action="script.php" method="post" encType="multipart/form-data">
            <input type="file" name="fileToUpload" />
            <input type="submit" value="Upload" />
        </form>
    )
}

export default Test;