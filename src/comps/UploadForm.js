import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)

    // allowed types of uploads
    const types = ['image/png', 'img/jeg'];


    const changeHandler = (e) => {
        // select first file (you can do multiple) and gives info about the file
        let selected = e.target.files[0];
        console.log(selected)

        if (selected && types.includes(selected.type)) {
        // check an selected & using include method to check it has one of the allowed types
        // reset error
            setFile(selected);
            setError('');
        } else {
        // resets value as null
            setFile(null);
            setError('Please select and image file (png or jpeg)');
        }
    }


    return (
        <form>
            <label>
                <input 
                    type="file"
                    onChange={changeHandler}
                />
                <span>+</span> 
            </label>
            <div className='output'>
                {/*right side is output only if left side is true*/}
                { error && <div className='error'>{ error }</div> }
                { file && <div> you have selected { file.name }</div>}

                {/*setFile function resets back to null*/}
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;