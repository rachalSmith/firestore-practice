import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

/****************************************************************************/
// state for the documents that we get from the collection. Initially an empty array. 
// eventually returning the docs once we have them.
// next we need to communicate with the database in order to get the documents. 
// all of this communication goes inside of useEffect so it can rerun whenever the collection changes,
// which is why collection is a dependency. 
// db.collection is used to listen to that collection and react inside for that collection.
// onSnapshot fires a callback once initially and then every time a change occurs inside the collection. 
// onSnapshot takes in a snapshot object - a list of all the docs in the collection at that moment in time. 

// for each doc in the collection, push each document as an object to the documents array. 
// each doc will have the data and the id. 
// using the spread operator so all properties inside the doc ate added. 

// then use the documents array to update state - now we have the docs. 

//orderBy specifies how we want the data displayed.
// return () => unSubscribe(); is a clean up function - unsunscribe from the collection when we 
// no longer use it. 
/****************************************************************************/

const useFirestore = (collectionToGetDocsFrom) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unSubscribe = projectFirestore.collection(collectionToGetDocsFrom)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot) => {
                let documents = [];
                snapshot.forEach(doc => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id 
                     })
                     setDocs(documents);
                })
            })

            return () => unSubscribe();
    }, [collectionToGetDocsFrom])

    return { docs }
}

export default useFirestore;