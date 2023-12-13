import { Link } from "react-router-dom";

const Card = ({ name, likes, removeCard, handleIcon, handleLikeClick }) => {

    return (
        <div className="card">
            <div className="animal-image-container">
                <img
                    src={`https://source.unsplash.com/400x400/?${name}`}
                    alt={name}
                    className="animal-image"
                />
                <span id="close-button" onClick={removeCard}>
                    X
                </span>
            </div>
            <div className="button-main-container">
                <h2 className="animal-title">{name}</h2>
                <div className="button-container">
                    <button className="dislikeButton" onClick={handleLikeClick}>-</button>
                    <div className="like-counter">
                        <span className="material-symbols-outlined mood">{handleIcon}</span>
                        <p>{likes}</p>
                    </div>
                    <button className="likeButton" onClick={handleLikeClick}>+</button>
                </div>
                <Link to={name}>See details</Link>
            </div>
        </div>
    );
};

export default Card;
