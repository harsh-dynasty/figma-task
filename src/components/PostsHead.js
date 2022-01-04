import React from "react";
import { Tabs, Tab, Sonnet } from "react-bootstrap";
const PostsHead = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      transition={"Fade"}
    >
      <Tab eventKey="home" title="All Posts"></Tab>
      <Tab eventKey="profile" title="Article"></Tab>
      <Tab eventKey="contact" title="Event"></Tab>
      <Tab eventKey="contact" title="Education"></Tab>
      <Tab eventKey="contact" title="Jobs"></Tab>
    </Tabs>
  );
};

export default PostsHead;
