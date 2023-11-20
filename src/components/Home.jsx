import frog from '../assets/frog.jpeg'
import crow from '../assets/crow.jpeg'

const Home = () => {
    return (
        <div className = "home-container">
            <div className="array-selector-container">
                <img src={frog} alt="Animals" />
                <p>Animals</p>
            </div>
            <div className="array-selector-container">
                <img src={crow} alt="Birds" />
                <p>Birds</p>
            </div>
        </div>
    )
}

export default Home;