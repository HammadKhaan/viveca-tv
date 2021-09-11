import React from "react";
import { List, Avatar } from "antd";
import RealMadrid from "./realmadrid.jpg";

const heading = {
    color:"white",

}

const Featured = () => {
  return (
    <div style={{marginLeft:"20px",marginTop:"50px"}}>
        <h2 style={heading}> Featured Tweets</h2>
      <List
        itemLayout="horizontal"
        dataSource={[
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={RealMadrid} shape="square" size={80} />}
              title={<h2 style={{color:"red"}}>Real Madrid</h2>}
              description= {<p style={{color:"white"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sed fugit, fugiat, eveniet veritatis sequi enim facilis explicabo delectus, 
              provident molestias cum error! Minima sed aspernatur officia adipisci ex culpa temporibus?" </p>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Featured;
