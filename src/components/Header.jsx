import ArrayButton from "./ArrayButton";

const Header = () => {

return (
        <header>
            <h1>Welcome to the Zoo!</h1>
            <div className="array-button-container">
        <ArrayButton name="Animals" />
        <ArrayButton name="Birds" />
        <ArrayButton name="Show all" />
      </div>
        </header>
    )
}

export default Header;