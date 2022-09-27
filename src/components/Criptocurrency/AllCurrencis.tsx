import React, {useState} from "react"
import Skeleton from "react-loading-skeleton"
import {Pagination} from "@mui/material";
import Coin from "./Coin";
import CoinsTableHead from "./CoinsTableHead";
import { isPropertySignature } from "typescript";

export interface Coin {
    id: number;
    image: string;
    current_price: number;
    total_volume: number;
    market_cap: number;
    price_change_percentage_24h: number;
    symbol: string;
}

interface Props {
  theme: boolean;
  allCoins: Coin[];
  onCloseModalHandler(id: number): void;
  errorCoin: string;
  loadingStatus: boolean;

}

const AllCurrencies: React.FC<Props> = ({theme, allCoins, onCloseModalHandler, errorCoin, loadingStatus}) => {
    const [page, setPageNum] = useState<number>(1);

    return (
      <>
        <div className="overflow-x auto mb-8">
            <table className="min-w-[700px] mx-auto mt-8">
              <CoinsTableHead />
              {!loadingStatus && (
                <tbody>
                    {allCoins.slice((page - 1) * 20, (page - 1) * 20 + 20)
                     .map((each, index) => {
                        return(
                            <Coin
                              themeStatus={theme}
                              key={each.id}
                              num={index + 1 + (page - 1) * 20}
                              eachData={each}
                              onSetOpenModal={onCloseModalHandler}
                            />
                        );
                     })}
                </tbody>
              )}
            </table>
            {loadingStatus && (
                <div className="z-0">
                    <Skeleton className="h-12 my-2" count={20}></Skeleton>
                </div>
              
            )}
            {loadingStatus && errorCoin && (
                <div className="text-center font-medium">
                    <p> {errorCoin} </p>
                </div>
            )}
        </div>
        <div className="flex z-0 justify-center">
            <Pagination
              className="w-fit"
              count={+(allCoins.length/ 20).toFixed()}
              variant="outlined"
              color="primary"
              size="small"
              onChange={(e, val) => {
                setPageNum(val)
              }} 
            />
        </div>
      </>
    )
}
