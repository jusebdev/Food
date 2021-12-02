import { applyMiddleware, createStore , compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__||compose;
const store = createStore(rootReducer, composeEnhacer(applyMiddleware(thunk)));
//thunk para hacer acciones con promesas
export default store;


// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducer/index";
// import thunk from "redux-thunk";

// const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
// const store = createStore(
//     rootReducer,
//     composeEnhacer(applyMiddleware(thunk))  
// )                                              

// export default store;