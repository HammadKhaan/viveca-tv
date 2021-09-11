import { Slider } from "antd";
import React from "react";
import ReactPlayer from "react-player";
import Vid from "./ES7.mp4";

function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(props) {
 // console.log("onAfterChange: ", value);
  console.log(`len`, props.length);

}

const Video = () => {
  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "20px" }}
    >
      <div style={{ border: "1px solid white" }}>
        <ReactPlayer  url={Vid} width="100%" length={Vid.length} height="100%" light/>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Slider 
          defaultValue={0}
          max={186}
          onChange={onChange}
          onAfterChange={onAfterChange(length)}
        />
      </div>
    </div>
  );
};

export default Video;
