// Context.js
import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

const initialState = {
  tasks: [],
  notes:[],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'ADD_NOTE':
        return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
