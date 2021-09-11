import { Col, Row } from "antd";
import React from "react";
import Logo from "../Logo.png";

const main = {
  width: "100%",
  paddingTop: "10px",
  height: "maxContent",
  border: "1px solid white",
};
const text = {
  color: "white",
  textAlign: "center",
  textShadow:
    "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
};

const Main = () => {
  return (
    <div>
      <div style={main}>
        <h2 style={text}>VIVECA TV</h2>
      </div>
    </div>
  );
};

export default Main;
