import React from "react";
import {Modal, Button} from "react-bootstrap";
import MyButton from "../Cardbutton/Button";
import "./style.css"

function MyModal(props) {
    // console.log("in modal what props came from projects: ", props.project);
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-background"
        key={props.project.id}
      >
        <Modal.Header variant="close" closeButton className="card-background">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-background">
          <img src={props.project.image} alt={props.project.alt} className="img-fluid"></img>
          <p className="modal-text mt-3">
            {props.project.description}
          </p>
          <p>Technologies: </p>
          { props.project.tech? 
          (props.project.tech.map(item =>(
          <ul>
            <li>{item}</li>
          </ul>
          ))) : console.log("select project to view modal")
          }
        </Modal.Body>
        <Modal.Footer className="card-background">
          <Button variant="style" onClick={props.onHide}>Close</Button>
          <MyButton></MyButton>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  
  export default MyModal;