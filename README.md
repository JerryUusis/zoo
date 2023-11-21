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

You can filter the cards by name with the search bar.

### Likes

You can give upvotes and downvotes for the species with + and - buttons and the icon updates based on the result.

### Card removal

You can remove an individual card by clicking the 'x' button on the card.

### Dynamic images

Animal card images are updated with each refresh. The images in the cards are fetched from unsplash (which can create unexptected results) with setting the `<img>` element source attribute like this:

```js
<img src={`https://source.unsplash.com/400x400/?${name}`}>
```

### Routing and navigation

The project uses React Router for handling navigation and routing. The navigation structure is organized into different routes, making it easy for users to navigate between sections of the application.

Project utilizes dynamic routing to provide detailed information about each animal and bird. 

### Single page view

You can view detailed information about a specific animal or bird by clicking on the "See details" link in the card.

Each of the cards are supplied with detailed page that displays a little more dynamic content about the species.