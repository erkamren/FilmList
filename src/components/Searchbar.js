import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Searchbar() {
  return (
    <div
      className="bg-white 
    rounded-md 
    h-10 
    flex 
    w-1/2
    items-center"
    >
      <input
        placeholder=" Search  Filmlist"
        className="rounded-md
     w-full
      mx-3
      focus:outline-none"
      />
      <MagnifyingGlassIcon
        className="h-8
      text-slate-500
      "
      />
    </div>
  );
}

export default Searchbar;
