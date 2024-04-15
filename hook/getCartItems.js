import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const getCartItems = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const apiUrl = process.env.API_URL

    const getExploreData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                // Fetch cart count from backend API
                const response = await axios.post(apiUrl + 'cart/cartData', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data.data);
                setData(response.data.data);
            }
        } catch (error) {
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