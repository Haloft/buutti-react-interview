I refactored the app so that it uses only functional components, and now
also Arrow functions for cleaner code. Also tried to bring some spirit of 
functional programming by getting rid of for-loops and by using higher order functions.

I updated React to the newest version, so that i could use React hooks for cleaner code.

I changed the names of the rendering components to be more self-explanatory and moved them to a specific folder.

UI-wise i used reactstrap components to make it look a bit nicer(atleast in my opinion), 
made a card for the background with some gradient colour, and switched the list
to be white for clarity. Got rid of changing the color when marked complete. Instead
it now changes the font color and draws a line through the text. 

Instead of text, the buttons have icons. Font comes from Google. 
Added date on top of the card. 


For unit-testing i chose the TodoList component which renders the Todo-items. 
The tests check that the app renders an item, and the buttons call their specified
event handlers. For testing i used Jest, and some helpers from React Testing Library. 

-Arto Halonen



This app is intended as a React pre-task for applying to Buutti as a developer.

<b>Tasks:</b>

1. Refactor this app with the following criterion:

-   Use only functional components
-   Give it a good architectural structure
-   Change the UI look to something better. You choose the style.

2. Write unittests to test 1 component well.

<b>To return:</b>

-   Fork this repo to your own github, gitlab or bitbucket account and send the interviewer the link to that repo.
