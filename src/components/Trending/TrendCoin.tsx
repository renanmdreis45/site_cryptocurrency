import React from "react";

interface Props {
    onClick: any;
    theme: boolean;
    trendingName: string;
    trendingImg: string;
}

const TrendCoin: React.FC<Props> = ({onClick, theme, trendingName, trendingImg }) => {
  return(
    <div
    onClick={onClick}
    className={`h-fit p-8 rounded-lg cursor-pointer ${
        theme === true ? "hover:bg-blue-grey-50" : "hover:bg-[#001e3c]"
        
    }`}
    >
      <img className="w-16 h-16 mx-auto"
      src={trendingImg}
      alt="trending"
      />
      <p className="text-xs text-blue-grey-700 tracking-wide text-center mt-2">
        {trendingName}
      </p>
    </div>
  )
}

export default TrendCoin;