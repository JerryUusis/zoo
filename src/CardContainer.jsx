import { useState } from "react";
import Card from "./Card";
import { animals, birds } from './animalsList';

const CardContainer = () => {
    const [animalData, setAnimalData] = useState(animals);
    return (
        <div className="card-container"> 
            {animalData.map(((animal, i) => (
                <Card key={i} name={animal.name} likes={animal.likes}/>
            )))}
        </div>
    )
}

export default CardContainer;