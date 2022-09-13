import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./Reducer/restaurantReducer"; 


const reducers=combineReducers(   {              //combine reducernte ullil oru object create akunu

restaurantReducer:restaurantListReducer  //reducer l kitya new state store cheyunu

}) //reducersne handle cheyanula function anu combineReducers

const middleware=[thunk]  //middlewares use cheyan thunk use akune

const store = createStore(reducers,applyMiddleware(...middleware))


export default store;