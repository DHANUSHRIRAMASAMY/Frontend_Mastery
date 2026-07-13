type Props = {
  search: string;
  setSearch: (value: string) => void;
};

function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search Student..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;