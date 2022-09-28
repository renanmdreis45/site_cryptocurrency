import React, {useState, useCallback, useEffect} from "react"
import { Input } from "@material-tailwind/react";
import { CoinList } from "../api"
import "react-loading-skeleton/dist/skeleton.css";
import AllCurrencies from "./AllCurrencies";
import axios, {AxiosResponse} from 'axios';

interface Props {
  themeStatus: any;
  onsetModal(id: string): void;
}

export interface Coin {
    id: string;
    image: string;
    current_price: number;
    total_volume: number;
    market_cap: number;
    price_change_percentage_24h: number;
    symbol: string;
}

  


const CryptoCurrencies: React.FC<Props> = ({themeStatus, onsetModal}) => {
    const [data, setData] = useState<Coin[]>([]);
    const [allCryptoCoin, setCryptoCoin] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [search, setSearch] = useState<string>("");

        const fetchingData = useCallback(async () => {
            setLoading(false);
            setError("");
            let url = CoinList();
            await axios.get(url)
            .then((response: AxiosResponse) => {
              setData(response.data);
            })
            .catch((error) => {
               if(axios.isCancel(error)) {
                console.log("Fetching aborted")
               } else {
                console.log(error.message);
               }
            });
          setLoading(true);
          console.log(data)
        }, []);
        
    
      useEffect(() => {
        fetchingData();
      }, [fetchingData]);

    useEffect(() => {
        let id = setTimeout(() => {
          setCryptoCoin(
            data.filter((each) => {
              return (
                each.id.toLowerCase().includes(search) ||
                each.id.toUpperCase().includes(search)
              );
            })
          );
        }, 600);
        return () => {
          clearTimeout(id);
        };
      }, [search, data]);
    
    const onSearchHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearch(e.target.value);
    };

    return (
        <div className= "p-8 max-w-[1300px] mx-auto">
            <Input
              onChange={onSearchHandler}
              value={search}
              size="lg"
              label="Procurar criptomoeda"
            />
            <AllCurrencies
              theme={themeStatus}
              allCoins = {allCryptoCoin}
              onCloseModalHandler = {onsetModal}
              errorCoin = {error}
              loadingStatus = {loading}
            />
        </div>
    )
}
export default CryptoCurrencies;