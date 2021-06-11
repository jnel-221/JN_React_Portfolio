import React from "react";
import {Modal, Button} from "react-bootstrap";
import MyButton from "../Cardbutton/Button";
import "./style.css"

function MyModal(props) {
    console.log("in modal what props came from projects: ", props.project);
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-background"
      >
        <Modal.Header variant="close" closeButton className="card-background">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-background">
          <img src={props.project.image} alt={props.project.alt} className="img-fluid"></img>
          {/* <h4 className="modal-text">{props.project.title}</h4> */}
          <p className="modal-text mt-3">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>Technologies: </p>
          <ul>

          </ul>
        </Modal.Body>
        <Modal.Footer className="card-background">
          <Button variant="style" onClick={props.onHide}>Close</Button>
          <MyButton></MyButton>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  
  export default MyModal;