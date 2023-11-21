import frog from '../assets/frog.jpeg'
import crow from '../assets/crow.jpeg'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <div className="array-selector-container">
                <NavLink to='/animals'>
                    <img src={frog} alt="Animals" />
                    <p to='/animals'>Animals</p>
                </NavLink>
            </div>
            <div className="array-selector-container">
                <NavLink to='/birds'>
                    <img src={crow} alt="Birds" />
                    <p>Birds</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;