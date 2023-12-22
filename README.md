# Zoo

Zoo project is a project made with React for Business College Helsinki Full Stack Developer program. It creates a set of cards fetched from an array of anonymous objects which are animals and birds.

## Technologies used

- React
- JS
- CSS

## Screenshots

## Sources

[React official page](https://react.dev/)

[React router](https://reactrouter.com/en/main)

## Features

### Search bar

Filter the cards by name using the search bar.

### Likes

Give upvotes and downvotes for species with + and - buttons, and the icon updates based on the result.

### Card removal

Remove an individual card by clicking the 'x' button on the card.

### Dynamic images

Animal card images are updated with each rendering of the page. The images in the cards are fetched from Unsplash with the following syntax:

```jsx
<img src={`https://source.unsplash.com/400x400/?${name}`}>
```

### Routing and navigation

The project uses React Router for handling navigation and routing. The navigation structure is organized into different routes, making it easy for users to navigate between sections of the application.

Project utilizes dynamic routing to provide detailed information about each animal and bird. 

### Single page view

You can view detailed information about a specific animal or bird by clicking on the "See details" link in the card.

Each of the cards are supplied with detailed page that displays a little more dynamic content about the species.

## Getting Started

1. Clone the repository.
2. Install dependencies with npm install.
3. Run the development server with npm run dev.

### Project Structure

The project is organized into several components and routes:

- App.jsx: The main application component.
- Header.jsx: Header component containing navigation links.
- SinglePage.js: Component for displaying detailed information about a - specific species.
- Home.jsx: Home component displaying category links.
- Category.jsx: Component for displaying a category of cards with search functionality.
- Root.jsx: Root component managing the overall layout.
- Footer.jsx: Footer component.

### Usage

Navigate to the home page by clicking on the "Home" link.
Explore different categories such as "Animals" and "Birds."
Use the search bar to filter cards by name.
Give likes or dislikes to species using the + and - buttons.
Click on the "See details" link in a card to view more information.