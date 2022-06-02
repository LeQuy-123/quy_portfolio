import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import era from "../../Assets/Projects/era.png";
import chatify from "../../Assets/Projects/chatify.png";
import eca from "../../Assets/Projects/eca.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat App to share resources and hangout with friends build with react native, and Node js. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/LeQuy-123/Nodejs-NT109.M21"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={era}
              isBlog={false}
              title="Bits-0f-C0de"
              description={`Education App help children understand their body, protect themselves against the risk of abuse, 
                respect themselves and others. Have feature like quiz, watch video, reading news, and many more. (Also available in IOS)`}
              link="https://play.google.com/store/apps/details?id=com.boot.era&hl=vi&gl=US"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eca}
              isBlog={false}
              title="ECA"
              description={`eCar Service App helps auto repair shops increase their revenue by connecting them with new in-demand customers in a timely & efficient manner without incurring significant customer-acquisition cost. 
              Plus, eCar Service provides communication & services tools to further satisfy customers & build brand loyalty. (Also available in IOS)`}
              link="https://play.google.com/store/apps/details?id=com.ecaraid.ecaservice&hl=vi&gl=US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
