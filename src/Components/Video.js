import React, { useState, useRef, useEffect } from "react";
import { Slider } from "antd";
import ReactPlayer from "react-player";
import Vid from "./ES7.mp4";

let count = 0;
function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(value) {
  console.log(`onAfterChange`, value);
}

const Video = () => {
  // const [playState, setPlayState] = useState(true);
  //const [over, setOver] = useState(false);
  const [time, setTime] = useState(0);

  const [state, setState] = useState({
    playing: true,
    played: 0,
    seeking: false,
  });
  const ref = React.createRef();
  useEffect(() => {
    setTime(ref.current.getCurrentTime());
  });

  // useEffect(() => {
  //   const timer = ref?.current?.getCurrentTime();
  //   if(timer!==time){
  //   const clear=setInterval(()=>{
  //     console.log(`time`, time);
  //     setTime(timer);
  //   },1000)
  //   return ()=>clearInterval(clear)
  // }
  // });
  const handleSeekChange = (e, newValue) => {
    console.log({ newValue });
    //setState({ ...state, played: parseFloat(newValue / 100) });
  };

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "20px" }}
    >
      {/* <div
        style={{ border: "1px solid white" }}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      > */}
      {
        //over && (
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
        ref={ref}
        url={Vid}
        controls
        width="100%"
        height="100%"
        playing={state.playing}
        loop={false}
        //onPlay={yourFunction}
        //playIcon={<button>Play</button>}
        //onProgress={time}
        //onDuration={getDuration}
        //onChange={setTime(ref.current.getCurrentTime())}
      />
      {/* </div> */}
      <div style={{ marginTop: "40px" }}>
        <Slider
          // defaultValue={0}
          max={186}
          value={time}
          onChange={onChange}
          onAfterChange={onAfterChange}
        />

        {/*<button onClick={() => ref.current.seekTo(10)}>Click me</button> */}
      </div>
    </div>
  );
};

export default Video;
