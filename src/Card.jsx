import { useState } from "react";
<>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</>


const Card = ({name, likeAmount}) => {
    const [likes, setLikes] = useState(0);
    const [mood, setMood] = useState("sentiment_neutral");


    //Fix this later
    const checkMood = () => {
        if (likes === 0) {
            setMood("sentiment_neutral")
        }
        else if (likes > 0) {
            setMood("Mood")
        }
        else if (likes < 0) 
            setMood("sentiment_dissatisfied")
        }

    const positiveClick = () => {
        setLikes(likes + 1)
        checkMood()
        console.log(likes)
    }

    const negativeClick = () => {
        setLikes(likes - 1)
        checkMood()
    }


    return (
    <div className="card">
        <div className="animal-image">
            <span id="close-button" >X</span>
        </div>
        <div className="button-main-container">
            <h2 className="animal-title">{name}</h2>
            <div className="button-container">
                <button onClick={negativeClick}>-</button>
                <div className="like-counter">
                    <span className="material-symbols-outlined mood">{mood}</span>
                    <p>{likes}</p>
                </div>
                <button onClick={positiveClick}>+</button>
            </div>
        </div>
    </div>)
}

export default Card;