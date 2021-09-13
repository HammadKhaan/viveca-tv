import React, { useState, useRef, useEffect } from "react";
import { Slider } from "antd";
import ReactPlayer from "react-player";
import Vid from "./ES7.mp4";
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';


const Video1 = () => {
  const ref = React.createRef();
  const [time, setTime] = useState(0);
  const [over, setOver] = useState(false);
  const [playing, setPlaying] = useState(true);

  const [duration,setDuration] = useState(0)

  useEffect(() => {
    const clear = setInterval(() => {
      setTime(ref.current.getCurrentTime());
      console.log(`time`, time);
    }, 1000);
    return () => clearInterval(clear);
  });

  

  function onChange(value){
        // setTime(value);
        // console.log(value)
        ref.current.seekTo(value,'secondes')
  }

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "20px" }}
    >

      {/* <div style={{ border: "1px solid white" }}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      > 
      
        {over && (
         <div
          style={{
            marginRight:"20px",  
            marginLeft:"40px",
            marginTop: "73px",  
            width: "96%",
            height: "19%",
            backgroundColor: "rgba(200,200,200,0.7)",
            position: "absolute",
            zIndex: 10,
            top: 0,
            right: 0,
            textAlign: "center",
            paddingTop: "190px",
            fontSize: "100px"
            
          }} */}
          
        {/* > */}
              {/* <button onSubmit={()=> alert()}>{playing ? <PauseCircleFilled />: <PlayCircleFilled />}</button>  */}
                
             
        
         {/* </div>    */}
        {/* )} */}
        <ReactPlayer
          width="100%"
          height="100%"
          url={Vid}
          ref={ref}
          playing={playing}
          onDuration={(e)=>{setDuration(e)}}
    

          />
          {/* </div> */}
        <div style={{ marginTop: "40px" }}>
          <Slider
          value={time} max={duration} onChange={onChange}

          />
          
      </div>
     </div>
  );
};

export default Video1;
