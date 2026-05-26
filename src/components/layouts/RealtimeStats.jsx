import useMarketStore from "../../store/marketStore";

export default function RealtimeStats() {
  const { marketData } =
    useMarketStore();

  const totalItems =
    marketData.length;

  const avgPrice =
    marketData.reduce(
      (acc, item) =>
        acc + item.sell_price_min,
      0
    ) / (marketData.length || 1);

  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        p-5
      "
    >
      <h2 className="text-xl font-semibold mb-5">
        Realtime Stats
      </h2>

      <div className="space-y-3">
        <div
          className="
            flex
            justify-between
          "
        >
          <span>Total Items</span>

          <span className="text-green-400">
            {totalItems}
          </span>
        </div>

        <div
          className="
            flex
            justify-between
          "
        >
          <span>Average Price</span>

          <span className="text-green-400">
            {Math.round(avgPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}