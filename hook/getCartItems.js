import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const getCartItems = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const apiUrl = process.env.API_URL

    const getExploreData = async () => {
        setIsLoading(true)
        try {
            const token = await AsyncStorage.getItem('token');
            console.log(token)
            if (token) {
                // Fetch cart count from backend API
                const response = await axios.get(apiUrl + 'cart/items', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // console.log(response.data);
                setData(response?.data?.data);
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log("Failed to load bag data due to : ", error);
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

export default getCartItems;