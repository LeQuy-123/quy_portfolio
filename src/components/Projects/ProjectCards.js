import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.isApp ? <div style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}>
          <Button variant="primary" href={props.linkIos} target="_blank">
            <BiLinkExternal /> &nbsp;
            {"View Ios"}
          </Button>
          <Button variant="primary" href={props.linkAndroid} target="_blank">
            <BiLinkExternal /> &nbsp;
            {"View Android"}
          </Button>
        </div> : <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button> 
        }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
