import { create } from "zustand";

const useFilterStore = create((set) => ({
  search: "",

  tier: "ALL",

  enchant: "ALL",

  minProfit: 0,

  setSearch: (value) =>
    set({
      search: value,
    }),

  setTier: (value) =>
    set({
      tier: value,
    }),

  setEnchant: (value) =>
    set({
      enchant: value,
    }),

  setMinProfit: (value) =>
    set({
      minProfit: value,
    }),
}));

export default useFilterStore;