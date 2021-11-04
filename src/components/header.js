import styled from "styled-components"

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
    position: sticky;
    top: 0;
    z-index: 2;
    justify-content: center;
    align-items: center;
    background-color: #9400d3;
    margin: auto;
    > .headerLogo {
        width: 30%;
        height: 20pt;
        background-color: #8a2be2;
        background-image: url("xyz.png");
        margin: auto 10%;
    }
    > .links {
        width: 50%;
        margin: auto 10%;
    }
    > div > ul {
        list-style-type: none;
        overflow: hidden;
    }
    > div > ul > li {
        display: inline;
        font-size: large;
        font-style: oblique;
        margin: 0 3%;
    }
`

const Header = () => {
    return (
        <HeaderDiv>
            <div className="headerLogo"></div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
        </HeaderDiv>
    )
}

export default Header
