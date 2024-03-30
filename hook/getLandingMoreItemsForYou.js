import { useState, useEffect } from "react";
// import axios from "axios";

const getLandingMoreItemsForYou = () => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    // const apiUrl = process.env.API_URL_LANDING_PAGE

    const getExploreData = async () => {
        try {
            const response = await fetch('http://192.168.254.107/api/v1/landing-page/getMoreItemsForYou');
            const json = await response.json();
            setData(json.data);
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

export default getLandingMoreItemsForYou;