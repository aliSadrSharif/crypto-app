import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TabelCoin({ coins }) {
  return (
    <div>
      <table>
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
            <TabelRow coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelCoin;

const TabelRow = ({
  coin: {
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <tr>
      <td>
        <div>
          <img src={image} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>{price_change.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
};
