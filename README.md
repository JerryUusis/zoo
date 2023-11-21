# Zoo

Zoo project is a project made with React for Business College Helsinki Full Stack Developer program. It creates a set of cards fetched from an array of anonymous objects which are animals and birds.

You can filter the cards by name with the search bar.

You can give up and downvotes and the icon updates based on the result.

You can remove an individual card by clicking the 'x' button on the card.

Animal card images are updated with each refresh. The images in the cards are fetched from unsplash (which can create unexptected results) with setting the `<img>` element source attribute like this:

```js
src={`https://source.unsplash.com/400x400/?${name}`}
```