import "./App.css";
import "antd/dist/antd.css";
import Sidebar from "./Components/Sidebar";
import { Col, Row } from "antd";
import Main from "./Components/Main";
import Featured from "./Components/Featured";
import Video1 from "./Components/Video1";

const sidebar = {
  height: "maxContent",
  border: "1px solid black",
  width: "22%",
};
function App() {
  return (
    <div className="App">
      <Row>
        <Col style={sidebar} xs={6} sm={3} md={6} lg={6}>
          <Sidebar />
        </Col>
        <Col xs={18} sm={21} md={18} lg={18}>
          <Main />
          <Video1 />
          <Featured />
        </Col>
      </Row>
    </div>
  );
}

export default App;
