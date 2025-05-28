import SearchBar from "./SearchBar"

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-options">
        <p className="search-option">Sale</p>
        <p className="search-option">Rent</p>
      </div>
      <SearchBar/>
    </div>
  )
}

export default Search
