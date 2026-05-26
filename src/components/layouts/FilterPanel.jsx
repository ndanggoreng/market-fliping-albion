import useFilterStore from "../../store/filterStore";

export default function FilterPanel() {
  const {
    search,
    tier,
    enchant,
    minProfit,

    setSearch,
    setTier,
    setEnchant,
    setMinProfit,
  } = useFilterStore();

  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        p-5
        mb-6
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
        "
      >
        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            bg-gray-800
            border border-gray-700
            rounded-xl
            px-4 py-3
            outline-none
          "
        />

        <select
          value={tier}
          onChange={(e) =>
            setTier(e.target.value)
          }
          className="
            bg-gray-800
            border border-gray-700
            rounded-xl
            px-4 py-3
          "
        >
          <option value="ALL">
            All Tier
          </option>

          <option value="T4">
            Tier 4
          </option>

          <option value="T5">
            Tier 5
          </option>

          <option value="T6">
            Tier 6
          </option>
        </select>

        <select
          value={enchant}
          onChange={(e) =>
            setEnchant(e.target.value)
          }
          className="
            bg-gray-800
            border border-gray-700
            rounded-xl
            px-4 py-3
          "
        >
          <option value="ALL">
            All Enchant
          </option>

          <option value=".1">
            .1
          </option>

          <option value=".2">
            .2
          </option>

          <option value=".3">
            .3
          </option>
        </select>

        <input
          type="number"
          placeholder="Min Profit"
          value={minProfit}
          onChange={(e) =>
            setMinProfit(
              Number(e.target.value)
            )
          }
          className="
            bg-gray-800
            border border-gray-700
            rounded-xl
            px-4 py-3
          "
        />
      </div>
    </div>
  );
}