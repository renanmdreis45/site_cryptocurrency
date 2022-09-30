import axios, { AxiosResponse } from "axios";
import { setDefaultResultOrder } from "dns";
import React, {useCallback, useEffect, useState} from "react";
import {SingleCoin} from "../components/api";
import {CurrDesc} from "./CurrDesc";
import {Tags} from "./Tags";

interface Props {
    coinName: string;
    theme: boolean;
}

interface DataCoin {
    image: string;
    name: string
    rank: string;
    desc: string;
    sourceCode: string;
    chat: string;
    site: string;
    twitter: string;
    announcement: string;
    lowtfprc: number;
    hightfprc: number;
    price: number;
    prcpertf: number;
    market_cap: number;
    total_vol: number;
    circulating_supply: string;
}   
export const CoinDescription: React.FC<Props> = ({coinName, theme}) => {
    const [coinData, setCoinData] = useState<DataCoin>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    
    const fetchingEachCoin = useCallback(async () => {
        setLoading(false);
        setError(null);
        let url = SingleCoin(coinName);

        await axios.get(url)
        .then((response: AxiosResponse) => {
            let data = response.data;
            const mainData = {
                image: data.image.large,
                name: data?.name,
                rank: data?.market_cap_rank,
                desc: data.description.en.split(". ")[0] + ".",
                sourceCode: data.links.repos_url.github[0],
                chat: data.links.chat_url[0],
                site: data.links.homepage[0],
                twitter: data.links.twitter_screen_name,
                announcement: data.links.announcement_url[0],
                lowtfprc: data.market_data.low_24h.usd?.toLocaleString(),
                hightfprc: data.market_data.high_24h.usd?.toLocaleString(),
                price: data.market_data.current_price.usd?.toLocaleString(),
                prcpertf: data.market_data.price_change_percentage_24h?.toFixed(2),
                market_cap: data.market_data.market_cap.usd?.toLocaleString(),
                total_vol: data.market_data.total_volume.usd?.toLocaleString(),
                circulating_supply: data.market_data.circulating_supply?.toLocaleString(),                
            }
            setCoinData(mainData);
        })
        .catch((err) => {
            if(axios.isCancel(err)) {
                console.log("fetching aborted");
            } else {
                setError(err.message);
            }
        })
        setLoading(true);
    }, [coinName]);

    useEffect(() => {
        fetchingEachCoin();
    }, [fetchingEachCoin]);
    
    return (
        <div
            className={`w-[95%] max-w-[900px] rounded-2xl fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/2 h-[88%] max-h-[700px] z-10 flex flex-col md:flex-row overflow-auto ${
                theme === true? "bg-white" : "bg-[#0a1929] text-white"
            }`}
        >
        {!error && {
            <CurrDesc coinDeatiledData={coinData} loadedStatus={loading} />
        }}
        <div className="md:overflow-y-auto md:w-[65%] md:border-1 border-grey-600 p-4">
            

        </div>
        </div>
    );
 }