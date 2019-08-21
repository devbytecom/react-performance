import React from "react";
import { useDispatch } from "react-redux";
import ComponentWithUseSelector from "./components/with-use-selector";
import ComponentWithCreateSelector from "./components/with-create-selector";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "ADD_ITEM", item: { name: "potato" } })
          }
        >
          Add Stuff
        </button>
        <button onClick={() => dispatch({ type: "SET_SHOWN", shown: true })}>
          Update something not displayed
        </button>
      </div>
      <ComponentWithUseSelector />
      <ComponentWithCreateSelector />
    </>
  );
};

export default App;
