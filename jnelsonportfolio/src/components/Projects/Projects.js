import React from "react";
import {Row, Col, Card} from "react-bootstrap";
import projects from "./projects.json";


function Projects () {
    
    return(
        <Row xs={1} md={2} className="g-4">
        {projects.map( project => (
          <Col key={project.id} >
            <Card id={project.id}>
              <Card.Img variant="top" src="../images/karaoke.png" alt={project.alt} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                 {project.description}
                 {/* {project.technologies} */}
                </Card.Text>
                <Card.Link href={project.live}>Visit the site</Card.Link>
                <Card.Link href={project.repo}>Github Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    )
}

export default Projects;