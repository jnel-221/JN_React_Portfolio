import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import "./style.css"


function MyButton({site, repo, title}){
    return(
        <>
        <DropdownButton variant="style" id="dropdown-basic-button" className="text-center drp-btn" title="Tour the Site">
         <Dropdown.Item className="list" href={site}>View {title} live</Dropdown.Item>  
         <Dropdown.Item className="list" href={repo}>View Github repo</Dropdown.Item> 
        </DropdownButton>
        </>
    )
}

export default MyButton;
