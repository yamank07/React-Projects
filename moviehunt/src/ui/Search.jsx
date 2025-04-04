export const Search = ({ search, handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Your Movie"
      value={search}
      onChange={(e) => handleOnChange(e.target.value)}
      className="w-130 mb-20 px-5 py-3 text-lg tracking-wider bg-gray-200 border-3 border-gray-700 border-x-transparent border-t-transparent focus:bg-gray-300 focus:outline-none"
    />
  );
};
