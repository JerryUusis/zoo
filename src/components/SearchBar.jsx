const SearchBar = ({ handleSearch }) => {
    return (
        <input placeholder="Search" id="search-bar" onChange={handleSearch}></input>
    )
}

export default SearchBar;