import React from "react";
import { List } from "antd";

const arr = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const Sidebar = () => {
  return (
    <div>
      <List
        size="large"
        header={
          <div
            style={{
              color: "maroon",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                fontWeight:"bolder"
            }}
          >
            MUSIC
          </div>
        }
        bordered
        dataSource={arr}
        renderItem={(item) => (
          <List.Item
            style={{
              color: "white",
              fontWeight: "bolder",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            Hello World
          </List.Item>
        )}
      />
    </div>
  );
};

export default Sidebar;
