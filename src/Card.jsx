<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

const Card = (props) => {
    return (
    <div className="card">
        <div className="animal-image">
            <span id="close-button">X</span>
        </div>
        <div className="button-main-container">
            <h2 className="animal-title">{props.name}</h2>
            <div className="button-container">
                <button>-</button>
                <div className="like-counter">
                    <span className="material-symbols-outlined mood">mood</span>
                    <p>{props.likes}</p>
                </div>
                <button>+</button>
            </div>
        </div>
    </div>)
}

export default Card;