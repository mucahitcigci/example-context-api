import React, { createContext, useState } from "react";

const initialState = {
  count: 0,
  setCount: () => {},
  posts: [],
  setPosts: () => {},
};

export const AppContext = createContext(initialState);

const Provider = (props) => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <AppContext.Provider value={{ count, setCount, posts, setPosts }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};
export default Provider;
