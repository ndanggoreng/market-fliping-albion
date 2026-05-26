export default function SummaryCard({
    title,
    value,
    profit,
  }) {
    return (
      <div
        className="
          bg-gray-900
          border border-gray-800
          rounded-2xl
          p-5
        "
      >
        <p className="text-gray-400 text-sm">
          {title}
        </p>
  
        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
  
        <p className="text-green-400 mt-2">
          +{profit}%
        </p>
      </div>
    );
  }