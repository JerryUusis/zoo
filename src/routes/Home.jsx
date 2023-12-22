import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <div className="category-container">
                <NavLink to='/animals' >
                    <div id='animals' className='category-image-container'>
                        <p>Animals</p>
                    </div>
                </NavLink>
            </div>
            <div className="category-container">
                <NavLink to='/birds'>
                    <div id="birds" className='category-image-container'>
                        <p>Birds</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;