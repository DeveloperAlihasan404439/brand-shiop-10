const { useState, useEffect } = require("react")

const useFetchData = (data)=>{
    const [fetchData, setFetchData] = useState([])
    useEffect(()=>{
        fetch(data)
        .then(res => res.json())
        .then(data => setFetchData(data))
    },[])
    return fetchData;
}
export default useFetchData;