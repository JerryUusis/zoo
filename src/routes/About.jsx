const About = () => {
    return (
        <div className="about-main-container">
            <div className="about-text-container">
                <h1>Zoo</h1>
                <p>Zoo project is a project made with React for Business College Helsinki Full Stack Developer program. It creates a set of cards fetched from an array of anonymous objects which are animals and birds.</p>

                <h2>Technologies used</h2>
                <ul>
                    <li>React</li>
                    <li>JS</li>
                    <li>CSS</li>
                </ul>

                <h2>Sources</h2>
                <ul>
                    <li><a href="https://react.dev/">React official page</a></li>
                    <li><a href="https://reactrouter.com/en/main">React router</a></li>
                </ul>

                <h2>Features</h2>
                <h3>Search bar</h3>
                <p>Filter the cards by name using the search bar.</p>

                <h3>Likes</h3>
                <p>Give upvotes and downvotes for species with + and - buttons, and the icon updates based on the result.</p>

                <h3>Card removal</h3>
                <p>Remove an individual card by clicking the &rdquo;x&rdquo; button on the card.</p>

                <h3>Dynamic images</h3>
                <p>Animal card images are updated with each rendering of the page. The images in the cards are fetched from Unsplash with the following syntax:</p>
                <pre><code id="code-snippet">&lt;img src={`https://source.unsplash.com/400x400/?${name}`}&gt;</code></pre>

                <h3>Routing and navigation</h3>
                <p>The project uses React Router for handling navigation and routing. The navigation structure is organized into different routes, making it easy for users to navigate between sections of the application.</p>
                <p>Project utilizes dynamic routing to provide detailed information about each animal and bird.</p>

                <h3>Single page view</h3>
                <p>You can view detailed information about a specific animal or bird by clicking on the &rdquo;See details&rdquo; link in the card.</p>
                <p>Each of the cards are supplied with a detailed page that displays a little more dynamic content about the species.</p>

                <h2>Getting Started</h2>
                <ol>
                    <li>Clone the repository.</li>
                    <li>Install dependencies with <code>npm install</code>.</li>
                    <li>Run the development server with <code>npm run dev</code>.</li>
                </ol>

                <h3>Project Structure</h3>
                <p>The project is organized into several components and routes:</p>
                <table>
                    <thead>
                        <tr>
                            <th>File name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>App.jsx</code></td>
                            <td>The main application component.</td>
                        </tr>
                        <tr>
                            <td><code>Header.jsx</code></td>
                            <td>Header component containing navigation links.</td>
                        </tr>
                        <tr>
                            <td><code>SinglePage.jsx</code></td>
                            <td>Component for displaying detailed information about a specific species.</td>
                        </tr>
                        <tr>
                            <td><code>Home.jsx</code></td>
                            <td>Home component displaying category links.</td>
                        </tr>
                        <tr>
                            <td><code>Category.jsx</code></td>
                            <td>Component for displaying a category of cards with search functionality.</td>
                        </tr>
                        <tr>
                            <td><code>Root.jsx</code></td>
                            <td>Root component managing the overall layout.</td>
                        </tr>
                        <tr>
                            <td><code>Footer.jsx</code></td>
                            <td>Footer component.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default About;