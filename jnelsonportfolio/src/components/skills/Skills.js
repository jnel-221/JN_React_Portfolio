import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import skills from "./skills.json";
import "./style.css";


function Skills(){

    return(
        <>
        <Container className="mt-5 pt-5 skills">
        <h2 className="heading">Skills</h2>
        <hr></hr>
        <Row xs={2} md={6} lg={6} className="justify-content-md-center">
            {skills.map(icon =>(
                <Col className="pt-3">
                    <img src={icon.icon} alt={icon.alt} className="img img-thumbnail img-fluid icon"></img>
                </Col>
            ))}
        </Row>
        </Container>
        </>
    )

}


export default Skills;