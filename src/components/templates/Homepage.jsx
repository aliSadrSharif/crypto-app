import { useState } from "react";
import { useEffect } from "react";

import TabelCoin from "../module/TabelCoin";
import { getCoinList } from "../../services/cryptoApi";

function Homepage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };

    getData();
  }, []);

  return (
    <div>
      <TabelCoin coins={coins} />
    </div>
  );
}

export default Homepage;
