import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import school from "../../Assets/Projects/school.png";
import youtube from "../../Assets/Projects/youtube.png";
import coffee from "../../Assets/Projects/coffee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube - Clone"
              description="Built a MERN stack YouTube clone with features like video upload,authentication (JWT), subscriptions, search, and recommendations."
              ghLink="https://github.com/ROHIT-RICH/Live"
              demoLink="https://live-lp4l.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffee}
              isBlog={false}
              title="Coffe Web-Site"
              description="The website features a visually appealing layout with sections like Home, About, Menu, and Contact. Designed to provide a smooth browsing experience, it highlights the café’s brand, offerings, and atmosphere."
              ghLink="https://github.com/ROHIT-RICH/coffee"
              demoLink="https://rohit-rich.github.io/coffee/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="Editor.io"
              description="A modern, responsive front-end website for a fictional School."
              ghLink="https://github.com/ROHIT-RICH/School"
              demoLink="https://rohit-rich.github.io/School/index.html"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
