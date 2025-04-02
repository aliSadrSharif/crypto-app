import { useState } from "react";
import { useEffect } from "react";

import TabelCoin from "../module/TabelCoin";
import { getCoinList } from "../../services/cryptoApi";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      <TabelCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default Homepage;
