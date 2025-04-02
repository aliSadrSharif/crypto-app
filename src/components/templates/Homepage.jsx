import { useState } from "react";
import { useEffect } from "react";

import TabelCoin from "../module/TabelCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../module/Pagination";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page]);

  return (
    <div>
      <TabelCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Homepage;
