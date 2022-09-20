import  React, {useCallback, useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import Skeleton from 'react-loading-skeleton'
import { TrendingCoins } from "../api";
import TrendCoin from "./TrendCoin";

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


const Trending: React.FC<Props> = ({themeStatus, onsetModal}) => {
    const [trendingCoins, setTrendingCoins]: any = useState<{}>({
      id: 0,
      name: "",
      image: "",
    });
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
            console.log(data);
            setTrendingStatus(true);
        } catch(error) {
            let message
            if(error instanceof Error) message = error.message
            else message = String(error)

            reportError({message})
        }
    },[]);

    useEffect(() => {
        fetchTrendingCoins();
    },[fetchTrendingCoins]);
    
    return (
        <div className="mt-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-[95% max-w-[1200px] mx-auto rounded-md p-6">
          {!isLoaded && <Skeleton className="h-32 w-full" />}
          {isLoaded && !error && (
            <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={1000}
              animationDuration={1500}
              disableDotsControls
              disableButtonsControls
              responsive={responsiveSettings}
              autoPlay
            >
              {trendingCoins.map(({id, name, img}: any) => {
                return (
                  <TrendCoin
                    key={trendingCoins.id}
                    theme={themeStatus}
                    onClick={() => {
                      onsetModal(trendingCoins.id);
                    }}
                    trendingImg={trendingCoins.image}
                    trendingName={trendingCoins.name}
                  />
                );
              })}
            </AliceCarousel>
          )}
        </div>
    );
};

export default Trending;