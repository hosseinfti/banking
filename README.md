# Current State

The project currently contains a single component called Card.
The App.js file fetches the list of cards from a fake api and just renders the Cards.

## Objectives

1. Currently a loading is shown to the user as the list of cards is being fetched. but we notice that sometimes even after the list is fetched, the user still sees the loading. can you find and fix this bug? 🐛

2. The list of Cards should be turned into a horizontal (scrollable) Slider. (please don't use a npm Slider package for this challenge!)

3. Render the card number of the visible Card as user is scrolling the Slider.
   for example initially first Card's number should be rendered bellow the slider. as the user scrolls to the second Card, the second Card's number should be shown to the user. (render the active Card's number bellow the Slider with any style you like!)

### bonus

1. A layout shift occurs in the Card component when the Cards are initially rendered. can you find and fix it? 😈

2. Implement dark theme

3. Migrate the project to TypeScript.

4. Unit test the Slider component

Good Luck 😎
