import React from "react";
import {Modal, Button} from "react-bootstrap";
import MyButton from "../Cardbutton/Button";

function MyModal(props) {
    console.log("in modal what props came from projects: ", props.project);
    console.log("show: ", props.show);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.project.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.project.image} alt={props.project.alt} className="img-fluid"></img>
          <h4>{props.project.title}</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <MyButton></MyButton>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  
  export default MyModal;