import axios from "axios";
import {  useState, useCallback } from "react";
import { useAuth } from "../context/UserContext";

const useApiRequest = (type) => {
    const [response, setResponse] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const {currentUser} = useAuth()

    const doRequest = useCallback(async (body={}) => {

        try {
            setloading(true)
            const res = await axios.post('/api/index.php', { type, sessionID: currentUser['sessionID'], ...body })
            console.log(type + '_request', res)
            setResponse(res)

        } catch (err) {
            seterror("Error")
            console.log(err)
        } finally {
            setloading(false)
        }

    }, [type,currentUser])

    const invalidate = useCallback(() => {
        setResponse(null)
    }, [])
 

    return { response, loading, error, doRequest, invalidate };
};

export default useApiRequest;