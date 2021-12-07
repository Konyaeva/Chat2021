/*
// action
const action = {type: "INCREMENT"}
const action2 = {type: "DECREMENT", payload: {id: 0}}

// action creator
const actionCreator = (payload) => {
  return {type: "INCREMENT", payload}
}

// reducer
const reducer = (state = {count: 0}, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1}
    case "DECREMENT":
      return {...state, count: state.count - 1}
    default:
      return state
  }
}

// store
// store.dispatch({type: "INCREMENT"}) => reducer
// store.getSatete() => state
// store.subscribe() => подписка
*/

export const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;

  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    currentState = reducer(currentState, action);

    listeners.forEach((listener) => listener());

    return action;
  };

  return { getState, subscribe, dispatch }; // store
};

/// test
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore({ count: 1 }, reducer);
