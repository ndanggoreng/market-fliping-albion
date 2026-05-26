export default function SearchBar({
    search,
    setSearch,
  }) {
    return (
      <input
        type="text"
        placeholder="Search item..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          bg-gray-900
          border border-gray-800
          rounded-xl
          px-4 py-3
          outline-none
        "
      />
    );
  }