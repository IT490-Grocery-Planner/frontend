import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext";

const useApiRequest = (type, body={}) => {
    const [response, setResponse] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);
    const {currentUser, logout} = useAuth()

    useEffect(() => {

        const makeRequest = async () => {
            try {
                const res = await axios.post('/api/index.php', { type, sessionID: currentUser['sessionID'], ...body })
                console.log(type + '_request', res)
                setResponse(res)

            } catch (err) {
                seterror("Error")
                console.log(err)
            }

            setloading(false)

        }
        makeRequest()
    }, []);

    return { response, loading, error };
};

export default useApiRequest;