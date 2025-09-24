/* eslint-disable react-refresh/only-export-components */

import { useContext, createContext, useState, useEffect } from "react";

const MyListContext = createContext();

export function MyListProvider({ children }) {
  // ✅ Initialize from localStorage
  const [myList, setMyList] = useState(() => {
    const stored = localStorage.getItem("myList");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Save to localStorage whenever myList changes
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const addToList = (movie) => {
    setMyList((prevList) => {
      // Prevent duplicates
      if (prevList.find((item) => item.id === movie.id)) {
        return prevList;
      }
      return [...prevList, movie];
    });
  };

  const removeFromList = (id) => {
    setMyList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList }}>
      {children}
    </MyListContext.Provider>
  );
}

export function useMyList() {
  return useContext(MyListContext);
}
