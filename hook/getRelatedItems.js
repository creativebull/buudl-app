import { useState, useEffect } from "react";
import axios from "axios";

const getRelatedItems = (item) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const apiUrl = process.env.API_URL
    
    const getExploreData = async () => {
        try {
            const response = await axios.get(apiUrl + 'product-details/relatedProducts/' + item.item );
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

export default getRelatedItems;