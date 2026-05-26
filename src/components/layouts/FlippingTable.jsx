import useMarketData from "../../hooks/useMarketData";

import { calculateFlipping } from "../../utils/filpping";   

export default function FlippingTable() {
  const { data, loading } =
    useMarketData();

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
        Scanning opportunities...
      </div>
    );
  }

  const opportunities =
    calculateFlipping(data);

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
          Flipping Scanner
        </h2>

        <span className="text-green-400">
          {opportunities.length} Found
        </span>
      </div>

      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="pb-3">Item</th>
            <th>Buy From</th>
            <th>Sell To</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Tax</th>
            <th>Transport</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {opportunities.map(
            (item, index) => (
              <tr
                key={index}
                className="
                  border-t
                  border-gray-800
                  hover:bg-gray-800/40
                "
              >
                <td className="py-4">
                  {item.item}
                </td>

                <td>
                  {item.buyCity}
                </td>

                <td>
                  {item.sellCity}
                </td>

                <td>
                  {item.buyPrice}
                </td>

                <td>
                  {item.sellPrice}
                </td>

                <td>
                  {item.tax}
                </td>

                <td>
                  {item.transportCost}
                </td>

                <td className="text-green-400 font-semibold">
                  {item.profit}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}