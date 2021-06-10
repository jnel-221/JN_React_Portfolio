import React from "react";
import {Row, Col, Card} from "react-bootstrap";
import projects from "./projects.json";
import Button from "../Cardbutton/Button";
import "./style.css"


function Projects () {
    
    console.log("what's in json? ", projects)
    return(
        <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map( project => (
          <Col key={project.id} >
            <Card id={project.id} className="card-style">
              <Card.Img variant="top" src={project.image} alt={project.alt} className="image-border"/>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                 {project.description}
                 {/* {project.technologies} */}
                </Card.Text>
                <Button site={project.live} repo={project.repo}  title={project.title}></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    )
}

export default Projects;