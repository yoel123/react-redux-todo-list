this is another example of how to use redux with react.

first thers a simple to do list in "pure" vanila react, with add 
and delete functinality.

then thers the same to do list with redux.

i did not use thunk to keep things simple.

this code assumes you are familiar with react and understand the concepts of redux.
it's a simple example perfect for beginners.

if your new to redux (or react) go to the react todo first
and then have a look at the redux version.

-----------------------------
## how to use(for both projects):

1)clone this repo (or download it)

2)in the project folder run :
```
npm install
```
to install all the dependencies

3)run the server using:
```
npm start
```
----------------------

code structure(for the redux example):

*src/index.js

gets the store from the store file and wraps the app component
with a Provider which gets the store.

*src/App.js

inside yapp you have the add todo form and list component.
togather with the functions handaling the user input and sending it 
as actions to the reducer.

*src/store.js
holds the redux global store gets the inital state and the reducer
from the root reducer

*src/rducers/index.js
in the code can also be called as "src/rducers/" (depending on the reltive path you need)
this file combines all reducers

*src/rducers/todo.js
holds the reducer responsible for handling add deleate and reqest data
requests.

*src/actions/types.js
holds constants used for the action types names

*src/actions/todo_actions.js
holds all the action objects


-------------------
if anything is unclear please contact me:

contact form:

https://programingstuff.wordpress.com/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8/

or(contact form at the bottom):

https://ytutor.wordpress.com/