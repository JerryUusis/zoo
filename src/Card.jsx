<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

const Card = () => {
    return (
    <div className="card">
        <div className="animal-image"></div>
        <div className="button-main-container">
            <h2>Animal title</h2>
            <div className="button-container">
                <button>-</button>
                <span className="material-symbols-outlined mood">mood</span>
                <button>+</button>
            </div>
        </div>
    </div>)
}

export default Card;