import React from "react";
import { useSelector } from "react-redux";

const WithUseSelector = () => {
  const demoItems = useSelector(({ demo }) => demo.items.map(item => item));
  const dateRendered = new Date();

  return (
    <>
      <h2>With Use Selector</h2>
      <div>Rendered: {dateRendered.toString()}</div>
      {demoItems.map((item, index) => (
        <div key={`with--use-selector-${index}`}>{item.name}</div>
      ))}
    </>
  );
};

export default WithUseSelector;
