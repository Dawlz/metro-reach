import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    position: sticky;
    top: 0;
    z-index: 2;
    justify-content: center;
    align-items: center;
    background-color: #9400d3;
    margin: auto;
    > .headerLogo {
        width: 10%;
        height: 20pt;
        background-color: #8a2be2;
        background-image: url("metro-reach.png");
        margin: auto 5% auto 0;
    }
    > .links {
        width: 50%;
        margin: auto 0 auto 5%;
    }
    > div > ul {
        list-style-type: none;
        overflow: hidden;
    }
    > div > ul > li {
        display: inline;
        font-size: larger;
        font-weight: 700;
        font-style: oblique;
        margin: 0 3%;
        cursor: pointer;
        color: #b0c4de;
        :hover {
            background-color: #80808088;
        }
        :active {
            background-color: #a9a9a9;
        }
    }
    > div > ul > li > a {
        text-decoration: none;
        color: inherit;
    }
`

const Header = () => {
    return (
        <HeaderDiv>
            <div className="headerLogo"></div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Services</li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    <li>Blog</li>
                </ul>
            </div>
        </HeaderDiv>
    )
}

export default Header
