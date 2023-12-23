import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Header = ({handleSearch}) => {

  return (
    <header>

      <h1>
        <NavLink>Zoo</NavLink>
      </h1>
      <SearchBar handleSearch={handleSearch}/>
      <div className="array-button-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/animals">Animals</NavLink>
        <NavLink to="/birds">Birds</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  )
}

export default Header;