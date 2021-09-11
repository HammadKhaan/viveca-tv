import React from "react";
import { List } from "antd";

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const Main = () => {
  return (
    <div>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={arr}
        renderItem={(item) => (
          <List.Item style={{ color: "white", fontWeight: "bolder" }}>
            Hello World
          </List.Item>
        )}
      />
    </div>
  );
};

export default Main;
