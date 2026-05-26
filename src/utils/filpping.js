export function calculateFlipping(
  data,
  filters
) {
  const opportunities = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      const buyData = data[i];
      const sellData = data[j];

      if (
        buyData.item_id !== sellData.item_id
      ) {
        continue;
      }

      if (
        buyData.city === sellData.city
      ) {
        continue;
      }

      const buyPrice =
        buyData.sell_price_min;

      const sellPrice =
        sellData.buy_price_max;

      if (
        !buyPrice ||
        !sellPrice
      ) {
        continue;
      }

      const tax = sellPrice * 0.065;

      const transportCost = 500;

      const profit =
        sellPrice -
        buyPrice -
        tax -
        transportCost;

      if (profit <= 0) {
        continue;
      }

      const itemId =
        buyData.item_id.toLowerCase();

      if (
        filters.search &&
        !itemId.includes(
          filters.search.toLowerCase()
        )
      ) {
        continue;
      }

      if (
        filters.tier !== "ALL" &&
        !buyData.item_id.startsWith(
          filters.tier
        )
      ) {
        continue;
      }

      if (
        filters.enchant !== "ALL" &&
        !buyData.item_id.includes(
          filters.enchant
        )
      ) {
        continue;
      }

      if (
        profit < filters.minProfit
      ) {
        continue;
      }

      opportunities.push({
        item: buyData.item_id,

        buyCity: buyData.city,

        sellCity: sellData.city,

        buyPrice,

        sellPrice,

        profit: Math.round(profit),

        tax: Math.round(tax),
      });
    }
  }

  return opportunities.sort(
    (a, b) => b.profit - a.profit
  );
}