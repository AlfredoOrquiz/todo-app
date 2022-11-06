# todo-app

## Lab class 31

### Lab problem
In Phase 1, we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

Style the application using the Blueprint Component API{target:_blank}

Properly modularize the application into separate components

Implement the Context API to make some basic application settings available to components

How many To Do Items to show at once
Whether or not to show completed items

## Lab class 32

### Lab problem
Extend your context provider to include all of the following features:
Create a context for managing application settings and provide this at the application level.
Display or Hide completed items (boolean).
Number of items to display per screen (number).
Default sort field (string).
Create a function in your context that saves user preferences (for the above) to local storage.
Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.
Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.

Consume and utilize Context values throughout your components:
Show a maximum of a certain number of items per screen in the <List /> component.
Provide “next” and “previous” links to let the users navigate a long list of items.
Hide or show completed items in the list.
Optional: Sort the items based on any of the keys (i.e. difficulty).

## Lab class 33

### Lab problem
In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

As a user, I want to provide a way for other users to create new accounts
As a user, I want to provide a way for all users to login to their account
As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

## UML
![Lab 31](Images/Lab-31.jpg)

## Deployed site
https://todo-list-template.netlify.app/

## Tests
To run test, type "npm Lab-32"

### Contributions
Jeffrey Smith, Jordan Yamada, TA's