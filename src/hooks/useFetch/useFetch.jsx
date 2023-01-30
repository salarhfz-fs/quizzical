import { useEffect, useState } from "react";

function useFetch(url) {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(function getJSONFromResponse(res) {
                return res.json()
            })
            .then(function setDataFromJSON(resJSON) {
                setData(resJSON)
            })
            .catch(function onError(error) {
                setError(error)
            })
            .finally(function stopLoading() {
                setLoading(false)
            })
    }, [])

    return { isLoading, data, error }
}

export default useFetch
