//For fetching data

import axios from "axios";
import { useEffect, useState } from "react"

// Always start with use in function name
const useFetch = (url, option = null) => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return { data, error, loading }

}



export default useFetch;