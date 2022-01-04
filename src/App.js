import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Banner";
import PostsHead from "./components/PostsHead";
import Post from "./components/Post";
import SideNav from "./components/SideNav";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Container fluid style={{ backgroundColor: "white" }}>
        <PostsHead />
        <Container>
          <Col>
            <Row>
              <Post />
            </Row>
            <Row>
              <Post />
            </Row>
            <Row>
              <Post />
            </Row>
          </Col>
          <Col>
            <SideNav />
          </Col>
        </Container>
      </Container>
    </div>
  );
}

export default App;
