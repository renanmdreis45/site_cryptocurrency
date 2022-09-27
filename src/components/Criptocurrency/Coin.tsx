import { useSlotProps } from "@mui/base";
import CoinsTableHead from "./CoinsTableHead";

export interface Bitcoin {
  id: number;
  image: string;
  current_price: number;
  total_volume: number;
  market_cap: number;
  price_change_percentage_24h: number;
  symbol: string;
}

interface Props {
  eachData: Bitcoin;
  onSetOpenModal(id: number): void;
  themeStatus: boolean;
  num: number;
}

const Coin: React.FC<Props> = ({eachData, onSetOpenModal, themeStatus, num}) => {
  let priceChangePercentage = eachData.price_change_percentage_24h;
  priceChangePercentage = parseFloat(priceChangePercentage.toFixed(2));

  if (!priceChangePercentage) {
    priceChangePercentage = 0;
  }

  let symbol = eachData.symbol.toUpperCase();

  let price = eachData.current_price;

  if(!price) {
    price = 0;
  }

  let totalVol = eachData.total_volume;

  if (!totalVol) {
    totalVol = 0;
  }

  let marktCap = eachData.market_cap;

  if (!marktCap) {
    marktCap = 0;
  }
  
  function coinDetailHandler() {
    onSetOpenModal(eachData.id);
  }

  return (
    <tr
      className={`border-b-[1px] ${
        themeStatus === true
        ? "border-grey-200 hover:bg-grey-100"
        : "hover:bg-[#001e3c] border-blue-grey-600"
      }`}
    >
        <td className="pl-2 py-6 font-medium text-sm">{num}</td>
        <td>
        <div className="flex items-center">
          <img
            alt="coin_icon"
            className="w-6 h-6 cursor-pointer"
            onClick={coinDetailHandler}
            src={eachData.image}
          />
          <span
            className="ml-3 font-medium text-base hover:underline cursor-pointer first-letter:uppercase"
            onClick={coinDetailHandler}
          >
            {eachData.id}
          </span>
          <span
            className="ml-4 font-medium text-xs text-grey-500 cursor-pointer"
            onClick={coinDetailHandler}
          >
            {symbol}
          </span>
        </div>
      </td>
      <td className="text-right py-6 font-medium text-sm">${price}</td>
      <td
        className={`text-right py-6 font-medium text-sm ${
          priceChangePercentage > 0 ? "text-green-400" : "text-red-500"
        }`}
      >
        {priceChangePercentage}%
      </td>
      <td className="text-right py-6 font-medium text-sm">${totalVol}</td>
      <td className="pr-2 text-right py-6 font-medium text-sm">${marktCap}</td>
    </tr>
  )
}

export default Coin;