import React from "react";
import ListBlock from "./ListBlock";

const Sider = ({ items }) => {
  return (
    <div style={{ display: "flex", flex: 2 }}>
      <ListBlock id="datas" list={items.datas} />
      <ListBlock id="funcs" list={items.funcs} />
    </div>
  );
};

export default Sider;
