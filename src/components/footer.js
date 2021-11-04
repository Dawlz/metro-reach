import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons"

const MainFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    border-top: 2pt solid black;
    margin: auto;
`
const FooterNavDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
    padding: 20pt 0;
    justify-content: space-evenly;
    > div {
        display: flex;
        width: 15%;
        justify-content: center;
    }
    `
const CopyRightDiv = styled.div`
    align-items: center;
    flex-direction: column;
    > span {
        align-self: center;
        text-align: center;
        font-size: medium;
        font-weight: bold;
        font-style: oblique;
        font-variant: small-caps;
        display: inline;
    }
    `
const LogoDiv = styled.div`
    align-items: center;
    flex-direction: column;
    background-color: #8a2be2;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 90pt;
    `
const SiteMap = styled.div`
    align-items: center;
    flex-direction: column;
    height: fit-content;
    > p {
        width: fit-content;
        font-size: 10pt;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        margin: 5pt 0;
    }
    > h3 {
        width: fit-content;
        font-size: 12pt;
        font-weight: bolder;
        font-style: oblique;
        color: #000000;
        margin: 5pt 0;
    }
    `
const SocialsDiv = styled.div`
    align-items: flex-start;
    flex-direction: row;
    > i {
        width: fit-content;
        margin: 5pt;
    }
    > span {
        margin: 5pt 0;
    }
`
const AddressDiv = styled.div`
    > address {
        text-align: right;
        font-size: medium;
        font-weight: 300;
        font-style: normal;
        line-height: 2;
    }
`

const Footer = () => {
    const copyright = new Date().getFullYear()

    return (
        <MainFooter>
            <FooterNavDiv>
                <LogoDiv></LogoDiv>
                <SiteMap>
                    <h3>Site Map</h3>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Contact Us</p>
                    <p>Blog</p>
                </SiteMap>
                <SocialsDiv>
                    <span>|</span>
                    <i>
                        <FontAwesomeIcon title = "Facebook" icon={faFacebook} color="#4267B2" />
                    </i>
                    <span>|</span>
                    <i>
                        <FontAwesomeIcon title = "Twitter" icon={faTwitter} color="#1DA1F2" />
                    </i>
                    <span>|</span>
                    <i>
                        <FontAwesomeIcon title = "Instagram" icon={faInstagram} color="#8a3ab9" />
                    </i>
                    <span>|</span>
                    <i>
                        <FontAwesomeIcon title = "Mail" icon={faPaperPlane} color="#0F4C81" />
                    </i>
                    <span>|</span>
                    <i>
                        <FontAwesomeIcon title = "Call" icon={faPhone} flip="horizontal" />
                    </i>
                    <span>|</span>
                </SocialsDiv>
                <AddressDiv>
                    <address>
                        Visit us at:<br/>
                        Our Office<br/>
                        54a, Adeola Odeku<br/>
                        Victoria Island<br/>
                        Lagos.
                    </address>
                </AddressDiv>
            </FooterNavDiv>
            <CopyRightDiv><span> &copy; {copyright} </span></CopyRightDiv>
        </MainFooter>
    )
}

export default Footer
