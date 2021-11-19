import { useState } from "react";
import styled from "styled-components";

const FormDiv = styled.div`
    width: 75%;
    background-color: #b0c0de66;
    border-radius: 10pt;
    margin: 0 auto 20pt auto;
    
`;

const FormBody = styled.form`
    width: 100%;
    padding: 30pt 0;
`;

const ContactForm = () => {
    const [Email, setEmail] = useState("");
    const [Names, setNames] = useState("");
    const [Message, setMessage] = useState("");

    const SubmitHandler = () => {
        setEmail("");
        setMessage("");
        setNames("");
    };

    return (
        <FormDiv>
            <FormBody onSubmit = {SubmitHandler} name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <h4>Get your message across easily</h4>
                <p>
                    <label htmlFor="Email">Enter Email Address:</label> <br />
                    <input type="email" name = "Email" value = { Email } onChange = { (e) => setEmail(e.target.value) } />
                </p>
                <p>
                    <label htmlFor="names">Names:</label> <br />
                    <input type="text" name = "names" value = { Names } onChange = { (e) => setNames(e.target.value) } placeholder="Full Names" />
                </p>
                <p>
                    <label htmlFor="message">Message:</label> <br />
                    <textarea
                    rows="4"
                    cols="30"
                    placeholder="Enter message here"
                    onChange = {(e) => setMessage(e.target.value)}
                    name = "message"
                    value = { Message }>
                    </textarea>
                </p>
                <input type="submit"/>
            </FormBody>
        </FormDiv>
    );
};

export default ContactForm;
