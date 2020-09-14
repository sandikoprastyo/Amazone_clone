/* import Context dkk dari react */
import React, { createContext, useContext, useReducer } from "react";

/* buat context klo di redux kaya createStore */
export const StateContext = createContext();
/* module buat Provider dan para props nya :D */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/* export useStateValue ini yang di pake buat konsume state dari component mana aja */
export const useStateValue = () => useContext(StateContext);
