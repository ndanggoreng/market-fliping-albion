export function calculateFlipping(data) {
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
  
        if (profit > 0) {
          opportunities.push({
            item: buyData.item_id,
  
            buyCity: buyData.city,
  
            sellCity: sellData.city,
  
            buyPrice,
  
            sellPrice,
  
            tax: Math.round(tax),
  
            transportCost,
  
            profit: Math.round(profit),
          });
        }
      }
    }
  
    return opportunities.sort(
      (a, b) => b.profit - a.profit
    );
  }