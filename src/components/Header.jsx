import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <h1>Welcome to the Zoo!</h1>
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