// src/context/MyListContext.jsx
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
export const MyListContext = createContext();

export function MyListProvider({ children }) {
  const [myList, setMyList] = useState([]);

  const addToList = (item) => {
    if (!myList.find((i) => i.id === item.id)) {
      setMyList([...myList, item]);
    }
  };

  const removeFromList = (id) => {
    setMyList(myList.filter((item) => item.id !== id));
  };

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList }}>
      {children}
    </MyListContext.Provider>
  );
}