const About = () => {
    return (
        <div className="about-container">
            <h1>Zoo project</h1>
            <p>Zoo project is a project made with React for Business College Helsinki Full Stack Developer program. It creates a set of cards fetched from an array of anonymous objects which are animals and birds.</p>
            <h2>Features</h2>
            <h3>Search bar</h3>
            <p>You can filter the cards by name with the search bar.</p>
            <h3>Likes</h3>
            <p>You can give up and downvotes and the icon updates based on the result.</p>
            <h3>Card removal</h3>
            <p>You can remove an individual card by clicking the &apos;x&apos; button on the card.</p>
            <h3>Dynamic images</h3>
            <p>Animal card images are updated with each refresh. The images in the cards are fetched from unsplash (which can create unexptected results) with setting the &lt;img&gt; element source attribute like this:</p>
            <p>
                <code>src=`https://source.unsplash.com/400x400/?${name}`</code>
            </p>
        </div>
    )
}

export default About;