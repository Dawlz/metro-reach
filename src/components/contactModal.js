import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IconButton = styled.button`
    position: fixed;
    right: 5%;
    bottom: 12%;
    width: 40pt;
    height: 40pt;
    border: 1pt solid #f0f8ff;
    border-radius: 50%;
    text-align: center;
    font-size: medium;
    background-color: #f0f8ffbf;
    cursor: pointer;
`;

const ContactModal = () => {

    return (
        <>
            <Link to="/contact#form"><IconButton><FontAwesomeIcon title="Contact" icon={faHeadset} size="2x" /></IconButton></Link>
        </>
    );
};

export default ContactModal;
