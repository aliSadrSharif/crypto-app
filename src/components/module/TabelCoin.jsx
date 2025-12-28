import { FadeLoader } from "react-spinners";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { marketChart } from "../../services/cryptoApi";

import styles from "./TabelCoin.module.css";

function TabelCoin({ coins, isLoading, setChart, currency }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <FadeLoader color="#3874ff" width={8} />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TabelRow
                coin={coin}
                key={coin.id}
                setChart={setChart}
                currency={currency}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TabelCoin;

const TabelRow = ({ coin, setChart, currency }) => {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin;

  const currencySymbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  const showHandeler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr
      className="hover:scale-110 transition-all cursor-pointer hover:bg-slate-300/20"
      onClick={showHandeler}
    >
      <td>
        <div className={styles.symbol}>
          <img src={image} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencySymbols[currency] || currency} {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
};
