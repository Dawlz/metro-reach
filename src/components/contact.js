import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import ContactForm from "./form";

const ContactMainDiv = styled.div`
    margin: auto;
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h2 {
        margin: 10px 0;
        font-size: 30pt;
        color: #b0c4de;
    }
    > div {
        width: 98%;
        margin: 10pt auto;
        border-bottom: #b0c4de solid 1pt;
    }
    > .socials {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10%;
    }
    > .socials > div {
        width: 30%;
        margin: 0 auto 5pt auto;
    }
    > .socials > h3 {
        margin: 5pt 0 10pt 0;
        font-size: 22pt;
        color: #b0c4de;
    }
    > .traditional {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10pt;
    }
    > .traditional > p {
        text-align: center;
        font-size: medium;
        text-transform: capitalize;
        margin: 10pt 0;
        line-height: 2.5;
    }
    .traditional > p > a {
        text-decoration: none;
        color: inherit;
    }
    > .contactFormDiv {
        border-bottom: none;
    }
`
const Contact = () => {
    return (
        <ContactMainDiv>
            <h2>You can reach us via multiple channels in order to bring us closer to you</h2>
            <div className="traditional">
                <p>
                    <a href="mailto:moyosore.ogunleye@r28.ng">
                        <FontAwesomeIcon title = "Mail" icon = {faPaperPlane} size="4x"  color="#0F4C81"/>
                    </a> <br />
                    <span>Send us an email <a href="mailto:moyosore.ogunleye@r28.ng">here</a></span>
                </p>
                <p>
                    <a href="tel:+2348168883134" >
                        <FontAwesomeIcon title = "Call" icon = {faPhone} size="4x" flip="horizontal" />
                    </a> <br />
                    <span>You can also give us a call <a href="tel:+2348168883134">here</a></span>
                </p>
            </div>
            <div className="socials">
                <h3>You can reach us on all social media and interact directly with us</h3>
                <div>
                    <p>
                        <a href="https://fb.me" target = "_blank" rel="noreferrer">
                            <FontAwesomeIcon title = "Facebook" icon = {faFacebookSquare} size="4x" color="#0F4C81"/>
                        </a> <br />
                        <span>Connect with us on <a href="https://fb.me" target = "_blank" rel="noreferrer">Facebook</a> to like, comment on and share our posts</span>
                    </p>
                </div>
                <div>
                    <p>
                        <a href="https://instagram.com" target = "_blank" rel="noreferrer">
                            <FontAwesomeIcon title = "Instagram" icon = {faInstagramSquare} size="4x" color="#8a3ab9"/>
                        </a> <br />
                        <span>You can also follow us on <a href="https://instagram.com" target = "_blank" rel="noreferrer">Instagram</a> to like view and like our posts</span>
                    </p>
                </div>
                <div>
                    <p>
                        <a href="https://twitter.com" target = "_blank" rel="noreferrer">
                            <FontAwesomeIcon title = "Twitter" icon = {faTwitterSquare} size="4x"  color="#1DA1F2"/>
                        </a> <br />
                        <span>Follow us on <a href="https://twitter.com" target = "_blank" rel="noreferrer">Twitter</a> to enjoy and engage with our tweets and join our live spaces</span>
                    </p>
                </div>
            </div>
            <div className="contactFormDiv" id="form">
                <ContactForm />
            </div>
        </ContactMainDiv>
    );
};

export default Contact;
