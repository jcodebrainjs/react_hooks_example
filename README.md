# Hooks Exercise

### Takeaways

1. Hooks need to accessed within a component so it can follow the heirarchy or Provider, then Consumer. That said, holding an Object of each created Store and reducer ref for that Store sorted by name should make it eaiser to get that Store for a component.

2. Creating a similiar structure for the hook like a redux, I used these files within one folder:
    1. actions: list of actions typed by an array from actionTypes. This holds the objects for each reducer.
    2. reducers: the functions to create new data to store
    3. constants: all constants for the store, including NAME
    4. store: using a createStore function, exporting a store for the index.js
    5. functions: these are functions that can be imported for each component, but each needing the dispatch (that can only be pulled from the useReducer)

3. Because we are using Hooks, we don't have to rely on containers (where we would normally get state and dispatch), so we add any processing of data within each Consumer component. We can most likely use a seperate file for functions to process data, import into the component then display the component. This simplifies the usual React-Redux folder structure.

### Objective

Design a single page application, using React with Hooks.

1. An About page, which should just contain text with information about the application. Just a simple description of who built the app and when is fine.
2. A Home page, which displays a collection of cat gifs in a carousel.
    1. We recommend using the public Giphy "Search" API to retrieve your data: [Giphy "Search" API](https://developers.giphy.com/docs/) (Note: you will need to create an app on Giphy's site to obtain an API key.) 
    2. You should fetch at least 5 gifs at a time, so the carousel will have several gifs the user can flip through.
    3. Your carousel should have a ‘Next’ arrow button that will display the next gif when it is clicked.
        1. The Next button should be disabled when the user is viewing the last gif in the collection.
    4. Your carousel should have a ‘Previous’ button that will display the last gif the user viewed when it is clicked. 
        1. The Previous button should be disabled if the user is viewing the first gif in the collection. 
    5. The Home page should fetch the gifs upon load. It should display some kind of loader component instead of the carousel while the data is being fetched.

#### Additional Notes:
- The app is bootstrapped with create-react-app.
- Using[Semantic UI React](https://react.semantic-ui.com/usage) 
- Jsing [Axios](https://github.com/axios/axios)
- A navigation bar that contains links to the Home page and About page, shared between both pages.
- Graceful error handling of the API call
