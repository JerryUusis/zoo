import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Header = ({ handleSearch, resetSearch }) => {

  return (
    <header>

      <h1>
        <NavLink>Zoo</NavLink>
      </h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="array-button-container">
        <NavLink to="/" onClick={() => resetSearch()}>Home</NavLink>
        <NavLink to="/animals" onClick={() => resetSearch()}>Animals</NavLink>
        <NavLink to="/birds" onClick={() => resetSearch()}>Birds</NavLink>
        <NavLink to="/about" onClick={() => resetSearch()}>About</NavLink>
      </div>
    </header>
  )
}

export default Header;