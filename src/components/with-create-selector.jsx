import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const WithCreateSelector = () => {
  const demoItemsSelector = state => state.demo.items;
  const getItems = createSelector(
    demoItemsSelector,
    items => items.map(item => item)
  );
  const potatoItems = useSelector(state => getItems(state));
  const dateRendered = new Date();

  return (
    <>
      <h2>With Create Selector</h2>
      <div>Rendered: {dateRendered.toString()}</div>
      {potatoItems.map((item, index) => (
        <div key={`with--create-selector-${index}`}>{item.name}</div>
      ))}
    </>
  );
};

export default WithCreateSelector;
