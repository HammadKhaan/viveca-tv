import { Slider } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Vid from "./ES7.mp4";

export const playIco = () => {
  return <h1>hammad</h1>;
};

function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(props) {
  // console.log("onAfterChange: ", value);
  console.log(`len`, props.length);
}

const Video = () => {
  const [playState, setPlayState] = useState(true);
  const [over, setOver] = useState(false);

  // const yourFunction = (event) => {

  //     console.log('Your event: ', event);

  // };

  //   const handlePlayPause = () => {

  //   };

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "20px" }}
    >
      <div
        style={{ border: "1px solid white" }}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        {//over && (
          // <div
          //   style={{
          //     width: "100%",
          //     height: "100%",
          //     backgroundColor: "rgba(200,200,200,0.7)",
          //     position: "absolute",
          //     zIndex: 10,
          //     top: 0,
          //     right: 0,
            //   }}
          // />
      // )
    }
        <ReactPlayer
          url={Vid}
          controls
          width="100%"
          height="100%"
          //light={true}
          playing={playState}
          //onPlay={yourFunction}
          //playIcon={<button>Play</button>}
          //onProgress={handleProgress}
        />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Slider
          defaultValue={0}
          max={186}
          onChange={onChange}
          onAfterChange={onAfterChange}
        />
      </div>
    </div>
  );
};

export default Video;
