// Actions
const configureStore = require("redux").configureStore;

// Reducers
const default_book_state = {
  book: 10,
};

const book_reducer = (state = default_book_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store
// const store = createStore(book_reducer);
const store = configureStore(book_reducer);
console.log("State initial: ", store.getState());
store.subscribe(() => {
  console.log("Change of State: ", store.getState());
});
store.dispatch();
