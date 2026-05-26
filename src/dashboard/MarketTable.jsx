import useMarketData from "../hooks/useMarketData";

export default function MarketTable() {
  const { data, loading } = useMarketData();

  if (loading) {
    return (
      <div
        className="
          bg-gray-900
          border border-gray-800
          rounded-2xl
          p-5
        "
      >
        Loading market...
      </div>
    );
  }

  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        p-5
        overflow-auto
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-5
        "
      >
        <h2 className="text-xl font-semibold">
          Live Market
        </h2>

        <span className="text-green-400 text-sm">
          Auto Refresh 10s
        </span>
      </div>

      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="pb-3">Item</th>
            <th>City</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const profit =
              item.sell_price_min -
              item.buy_price_max;

            return (
              <tr
                key={index}
                className="border-t border-gray-800"
              >
                <td className="py-4">
                  {item.item_id}
                </td>

                <td>{item.city}</td>

                <td>
                  {item.buy_price_max || "-"}
                </td>

                <td>
                  {item.sell_price_min || "-"}
                </td>

                <td
                  className={
                    profit > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {profit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}