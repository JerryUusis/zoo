import { useState } from "react";

const Card = ({ name, likes, removeCard, likeClick }) => {
    const [mood, setMood] = useState("sentiment_neutral");

    //Fix this later

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
                    <button className="dislikeButton" onClick={likeClick}>-</button>
                    <div className="like-counter">
                        <span className="material-symbols-outlined mood">{mood}</span>
                        <p>{likes}</p>
                    </div>
                    <button className="likeButton" onClick={likeClick}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
