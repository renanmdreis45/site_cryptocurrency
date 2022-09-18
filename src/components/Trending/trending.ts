import React, {useCallback, useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../api";

const Trending = () => {
    const [trendingCoins, setTrendingCoins] = useState("");
    const [isLoaded, setTrendingStatus] = useState(false);
    const [error, setError] = useState(null);

    const fetchTrendingCoins = useCallback(async () => {
        try {
            setTrendingStatus(false);
            setError(null);
            let url = TrendingCoins("usd");
            let response = await fetch(url);
            if(!response.ok) {
                throw new Error("Something went wrong");
            }
            let data = await response.json();
            setTrendingCoins(data);
            setTrendingStatus(true);
        } catch(error) {
            let message
            if(error instanceof Error) message = error.message
            else message = String(error)

            reportError({message})
        }
    },[]);
}
