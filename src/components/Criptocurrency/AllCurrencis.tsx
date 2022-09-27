import React, {useState} from "react"
import Skeleton from "react-loading-skeleton"
import {Pagination} from "@mui/material";
import Coin from "./Coin";
import CoinsTableHead from "./CoinsTableHead";
import { isPropertySignature } from "typescript";

interface Coins {
  
}

interface Props {
  theme: boolean;
  allCoins: Array<object>;
  onCloseModalHandler: boolean;
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
          </div>
        </>
    )
}
