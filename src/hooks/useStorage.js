import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

/********************************************************************** */
// a hooks is just a piece of reusable code - a function
// this hook will handle file uploads and return values like upload progress/errors/image url

// use the storage to upload our file. Once it's uploaded, get the image url and store it 
// in the database. then the database will contain a list of all image urls 
// then use the data to load images in a react component
/********************************************************************** */


const useStorage = (file) => {
    const [progress, setProgress] = useState(0); // progress of upload
    const [error, setError] = useState(null); // errors from upload
    const [url, setUrl] = useState(null); // image url we get back from storage after the upload

    useEffect(() => {
        // create a reference to where the file should be saved inside the firebase default storage bucket
        // when we upload something - this is what the name should be
        const storageRef = projectStorage.ref(file.name) // name is a key on the file object being taken in

        // This creates a collection in firestore
        const collectionRef = projectFirestore.collection('images') //does not matter that this collection has not been made first
                                                                    // firebase will make it for us

        // this uploads the file to storage with the stated reference
        // state_changed is a listener which fires functions when certain things happen - like progress
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            // get url of image
            const url = await storageRef.getDownloadURL();
            // adds url as doc to collection
            collectionRef.add({ 
                url: url, 
                createdAt: timestamp()
            })
            setUrl(url);
        })
    }, 
    [file]) // file dependency - use effect hook runs when a new file is uploaded only

    return { progress, url, error } // if we use this hook inside another component - these are the values we can access
}

export default useStorage;