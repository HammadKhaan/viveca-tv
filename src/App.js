import "./App.css";
import "antd/dist/antd.css";
import Sidebar from "./Components/Sidebar";
import { Col, Row } from "antd";
import Main from "./Components/Main";

const sidebar = {
  height: "maxContent",
  border: "1px solid black",
  width: "22%",
};
function App() {
  return (
    <div className="App">
      <Row>
        <Col style={sidebar}>
          <Sidebar />
        </Col>
        <Col>
          <Main />
        </Col>
      </Row>
    </div>
  );
}

export default App;
