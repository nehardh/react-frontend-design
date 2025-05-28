import { IoSearchCircleSharp } from "react-icons/io5"

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter name, keywords..."
        className="search-input"
      />
        <IoSearchCircleSharp className="search-icon" size={50} />
    </div>
  )
}

export default SearchBar
