import React, {useState}from "react";
import {Row, Col, Card} from "react-bootstrap";
import projects from "./projects.json";
import MyButton from "../Cardbutton/Button";
import MyModal from "../Modal/Modal";
import "./style.css"


function Projects () {

    // set state of project-data-object for modal
    const [activeProject, setProject] = useState({});

    //set state of visibility for modal;
    const [modalShow, setModalShow] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        const projectID = parseInt(event.target.id);
        const selectedProject = projects.find(project => project.id === projectID)
    
        setProject(selectedProject);
        setModalShow(true);
        
    };
     
    return(
      
        <>
        <MyModal key={activeProject.id} show={modalShow} onHide={()=> setModalShow(false)} project={activeProject}/>
        <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map( project => (
          <Col key={project.id} >
            <Card className="card-style">
              <Card.Img variant="top" src={project.image} alt={project.alt} className="image-border"/>
              <Card.Body>
                <Card.Title id={project.id} onClick={handleClick} className="project-title mb-3 p-2">{project.title}</Card.Title>
                <Card.Text>
                 {project.teaser}
                </Card.Text>
                <MyButton site={project.live} repo={project.repo}  title={project.title}></MyButton>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </>
      
    )
}

export default Projects;