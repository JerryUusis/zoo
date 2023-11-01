import Card from "./Card";
import { animals, birds } from './animalsList';

const CardContainer = () => {
    return (
        <div className="card-container"> 
            {animals.map(((animal, i) => (
                <Card key={i} name={animal.name} likes={animal.likes}/>
            )))}
        </div>
    )
}

export default CardContainer;