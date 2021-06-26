import React from "react";
import {Row,Col} from "react-bootstrap";
import skills from "./skills.json";
import "./style.css";


function Skills(){

    return(
        <>
        <div className="mt-5 pt-5 skills">
        <h2 className="heading">Skills</h2>
        <hr></hr>
        <Row xs={2} md={6} lg={6} className="justify-content-md-center">
            {skills.map((icon, index) =>(
                <Col className="pt-3">
                    <img key={index.toString()} src={icon.icon} alt={icon.alt} className="img img-thumbnail img-fluid icon"></img>
                
                </Col>
            ))}
        </Row>
        </div>
        </>
    )

}


export default Skills;