import  React, {useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import Skeleton from 'react-loading-skeleton'
import { TrendingCoins } from "../api";
import TrendCoin from "./TrendCoin";
import axios, {AxiosResponse} from 'axios';
import {TrendingHead} from "./TrendingHead";

const responsiveSettings = {
    0: {
      items: 2,
    },
    580: {
      items: 3,
    },
  };

interface Props {
  themeStatus: boolean;
  onsetModal: Function;
}

interface Coins {
  id: string;
  name: string;
  image: string;
};


const Trending: React.FC<Props> = ({themeStatus, onsetModal}) => {

  const [coins, setCoins] = useState<[Coins]>();
  const [loading, setLoading] = useState<boolean>(false);

    
  useEffect(() => {


    const fetchData= async () => {
        setLoading(false);
        let url = TrendingCoins();
        console.log(url);
        await axios.get(url)
        .then((response: AxiosResponse) => {
          setCoins(response.data);
          console.log(response.data)
        })
        .catch((error) => {
           if(axios.isCancel(error)) {
            console.log("Fetching aborted")
           } else {
            console.log(error.message);
           }
        });
      setLoading(true);
      console.log(loading)
    };
    
  fetchData();

  }, []);
   
    return (
        <div className="mt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-[95% max-w-[1200px] mx-auto rounded-md p-6">
          <TrendingHead />
          {!loading && <Skeleton className="h-32 w-full"/>}
          {loading && (     
            <AliceCarousel
            mouseTracking={true}
            infinite={false}
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsiveSettings}
            autoPlay>
              {coins?.map(coin => {
                 return (
                  <TrendCoin
                    key={coin.id}
                    theme={themeStatus}
                    onClick={() => {
                      onsetModal(coin.id);
                    }}
                    trendingImg={coin.image}
                    trendingName={coin.name}
                  />
                );
              })}
            </AliceCarousel>                               
          )}
        </div>
    );
};

export default Trending;