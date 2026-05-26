import { useEffect, useState } from "react";

import { fetchMarketData } from "../api/albionApi";

export default function useMarketData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    const result = await fetchMarketData(
      [
        "T4_BAG",
        "T5_MAIN_SWORD",
        "T4_CAPE",
      ],
      [
        "Bridgewatch",
        "Caerleon",
        "Martlock",
      ]
    );

    setData(result);
    setLoading(false);
  }

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return {
    data,
    loading,
  };
}