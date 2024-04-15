import { useState, useEffect } from "react";
import axios from "axios";

const getMoreFromSeller = (item) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const apiUrl = process.env.API_URL

    const getExploreData = async () => {
        try {
            const response = await axios.get(apiUrl + 'product-details/moreFromSeller/' + item.user.id);
            console.log(response.data.data);
            setData(response.data.data[0].products);
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

export default getMoreFromSeller;