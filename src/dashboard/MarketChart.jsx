import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useMarketStore from "../store/marketStore";

export default function MarketChart() {
  const { marketData } =
    useMarketStore();

  const chartData = marketData
    .slice(0, 10)
    .map((item, index) => ({
      name: `${index + 1}`,
      price: item.sell_price_min,
    }));

  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        p-5
        h-[350px]
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
          Live Market Trend
        </h2>

        <span className="text-green-400">
          LIVE
        </span>
      </div>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={chartData}>
          <CartesianGrid stroke="#333" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#4ade80"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}