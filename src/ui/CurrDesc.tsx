import React from "react";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";
import {Tags} from "./Tags"
import {CoinLinks} from "./CoinLinks";


export interface coinDeatiled {
    image: string;
    name: string;
    sourceCode: string;
    chat: string;
    twitter: string;
    announcement: string;
    site: string;
    rank: string;
    desc: string;
}

interface Props {
    loadedStatus: boolean;
    coinDeatiledData: coinDeatiled;
}

export const CurrDesc: React.FC<Props> = ({loadedStatus, coinDeatiledData}) => {
    return(
        <div className="h-full md:w-[35%] p-5 md:overflow-y-auto">
            {loadedStatus && (
                <div className="w-full flex flex-col items-center">
                    <img 
                        src={coinDeatiledData.image}
                        alt="img_coin"
                        className="w-12 h-12"
                    />
                    <h1 className="text-3xl font-semibold text-center mt-2">
                        {coinDeatiledData.name}
                    </h1>
                </div>
            )}
            {!loadedStatus && <Skeleton className="h-[5.25rem]" />}
            {loadedStatus && (
                <div className="w-full gap-2 flex mt-2 items-center justify-center">
                    <Tags className="text-white bg-blue-grey-500 font-medium">
                        Rank #{coinDeatiledData.rank}
                    </Tags>
                    <Tags className="text-white bg-blue-grey-500 font-medium">Coins</Tags>
                </div>
            )}
            {!loadedStatus && <Skeleton className="h-8 mt-2"/>}
            {loadedStatus && <CoinLinks coinData={coinDeatiledData} />}
            {!loadedStatus && <Skeleton className="h-16 mt-4" />}
            <div className="p-2 w-full mt-4">
                {loadedStatus && (
                    <p className="text-justify font-light text-sm">
                        {parse(coinDeatiledData.desc)}
                    </p>
                )}
                {!loadedStatus && <Skeleton className="h-36 mt-4" />}
            </div>
        </div>
    )
}