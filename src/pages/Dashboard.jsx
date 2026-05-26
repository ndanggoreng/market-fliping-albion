import DashboardLayout from "../components/layouts/DashboardLayout";

import SummaryCard from "../dashboard/SumarryCard";
import MarketTable from "../dashboard/MarketTable";
import MarketChart from "../dashboard/MarketChart";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Profit"
          value="$12,450"
          profit="12"
        />

        <SummaryCard
          title="Best Item"
          value="T5 Sword"
          profit="8"
        />

        <SummaryCard
          title="Market Spread"
          value="24%"
          profit="5"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <MarketChart />
        <MarketTable />
      </div>
    </DashboardLayout>
  );
}