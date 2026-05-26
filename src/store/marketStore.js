import { create } from "zustand";

const useMarketStore = create((set) => ({
  marketData: [],

  setMarketData: (data) =>
    set({
      marketData: data,
    }),
}));

export default useMarketStore;