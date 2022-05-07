import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {

    // destructured values from useStorage
    const { url, progress } = useStorage(file);

    console.log(progress, url);

    //use setFile to reset file to null and therefore remove the progress bar after url is uploaded 
    // because we only get the url once the upload is complete
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    },[url, setFile])

    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>
    )
}

export default ProgressBar;