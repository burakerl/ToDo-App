import searchIcon from "../assets/magnifying-glass-icon.jpg";
interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}
const Search = ({ search, setSearch }: SearchProps ) => {
  return (
    <div className="search-area">
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        maxLength={35}
      />
      <img src={searchIcon} alt="Search" />
    </div>
  );
};

export default Search;
