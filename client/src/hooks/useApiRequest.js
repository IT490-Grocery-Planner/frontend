import axios from "axios";
import {  useState, useCallback } from "react";
import { useAuth } from "../context/UserContext";

const useApiRequest = (type) => {
    const [response, setResponse] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const {currentUser} = useAuth()

    const doRequest = useCallback(
        async (body={}) => {
        try {
            const res = await axios.post('/api/index.php', { type, sessionID: currentUser['sessionID'], ...body })
            console.log(type + '_request', res)
            setResponse(res)

        } catch (err) {
            seterror("Error")
            console.log(err)
        }

        setloading(false)

    }, [type,currentUser])

 

    return { response, loading, error, doRequest };
};

export default useApiRequest;