import { useState } from "react";
import { useEffect } from "react";

import TabelCoin from "../module/TabelCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../module/Pagination";
import Search from "../module/Search";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TabelCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Homepage;
