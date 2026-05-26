const data = [
    {
      item: "T4 Bag",
      buy: 8200,
      sell: 11000,
      profit: 2800,
    },
    {
      item: "T5 Sword",
      buy: 15000,
      sell: 22000,
      profit: 7000,
    },
  ];
  
  export default function MarketTable() {
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
          Market Opportunities
        </h2>
  
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="pb-3">Item</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Profit</th>
            </tr>
          </thead>
  
          <tbody>
            {data.map((item) => (
              <tr
                key={item.item}
                className="border-t border-gray-800"
              >
                <td className="py-4">{item.item}</td>
                <td>{item.buy}</td>
                <td>{item.sell}</td>
                <td className="text-green-400">
                  {item.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }