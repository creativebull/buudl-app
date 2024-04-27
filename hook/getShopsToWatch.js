import { useState, useEffect } from "react";
import axios from "axios";

const getShopsToWatch = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const apiUrl = process.env.API_URL

    const getExploreData = async () => {
        try {
            const response = await axios.get(apiUrl + 'landing-page/shopsToWatch');
            console.log('==================');
            console.log(response.data.data);
            console.log('==================');
            setData(response.data.data);
        } catch (error) {
             setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getExploreData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}
}

export default getShopsToWatch;