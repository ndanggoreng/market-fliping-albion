export default function Navbar() {
    return (
      <header
        className="
          h-16
          border-b
          border-gray-800
          bg-gray-900
          flex
          items-center
          justify-between
          px-6
        "
      >
        <div>
          <h2 className="text-lg font-semibold">
            Dashboard
          </h2>
        </div>
  
        <div className="flex items-center gap-3">
          <div
            className="
              w-10 h-10
              rounded-full
              bg-indigo-500
            "
          />
        </div>
      </header>
    );
  }