import axios from "axios";
import {  useState, useCallback } from "react";
import { useAuth } from "../context/UserContext";

//Hook to make requests to app server
const useApiRequest = (type) => {
    const [response, setResponse] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const {currentUser} = useAuth()

    //Request trigger useCallback caches request response unless dependencies change
    const doRequest = useCallback(async (body={}) => {
        
        try {
            // Set state as loading
            setloading(true) 
            // Make API call using sessionID and request body
            const res = await axios.post('/api/index.php', { type, sessionID: currentUser['sessionID'], ...body })
            // Log request response
            console.log(type + '_request', res)
            // Set response in state
            setResponse(res)

        } catch (err) {
            // if any error occurs, set it in state and log it
            seterror(err)
            console.log(err)
        } finally {
            //When request finishes (on error or success) set loading to false
            setloading(false)
        }

    }, [type,currentUser]) // type and currentUser as dependencies
 

    return { response, loading, error, doRequest };
};

export default useApiRequest;