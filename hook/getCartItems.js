import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getCartItems = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const apiUrl = process.env.API_URL

    const getExploreData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(
                apiUrl + 'auth/cart',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log(response.data);
            setData(response.data.cartItems);
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