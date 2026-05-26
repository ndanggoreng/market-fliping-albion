import { useEffect, useState } from "react";

import { fetchMarketData } from "../api/albionApi";

import useMarketStore from "../store/marketStore";

export default function useMarketData() {
  const [loading, setLoading] =
    useState(true);

  const {
    marketData,
    setMarketData,
  } = useMarketStore();

  async function loadData() {
    setLoading(true);

    const result = await fetchMarketData(
      [
        "T4_BAG",
        "T5_MAIN_SWORD",
        "T4_CAPE",
        "T4_ARMOR_LEATHER_SET1",
      ],
      [
        "Bridgewatch",
        "Caerleon",
        "Martlock",
        "Lymhurst",
      ]
    );

    setMarketData(result);

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
    data: marketData,
    loading,
  };
}