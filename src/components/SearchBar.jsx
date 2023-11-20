const SearchBar = ({handleChange}) => {
    return (
        <input placeholder="Search" id="search-bar" onChange={handleChange}></input>
    )
}

export default SearchBar;