import { Link } from "react-router-dom"
import styled from "styled-components"
import ContactModal from "./contactModal"

const MainDiv = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    margin: auto;
    > div {
        width: 98%;
        margin: 20px auto;
    }
`;

const HeadBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    div {
        width: 100%;
        margin: auto;
        height: 500px;
        margin: 5pt 0 10pt 0;
    }
    .ImageBackground {
        padding: 0;
        background-image: url("IT-Service-1-1024x569.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    div > h1 {
        width: 35%;
        text-align: left;
        position: relative;
        top: 340px;
        left: 64%;
        background-color: #80808066;
        font-size: 20pt;
        margin: 2px 0 0 10px;
    }
`

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2pt 2pt 1pt 1pt #add8e6;
    border-radius: 5pt;
    h2 {
        margin: 10px 0;
        font-size: 40pt;
        color: #b0c4de;
    }
    > div {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        gap: 5%;
    }
    div >  div {
        width: 70%;
    }
    div > p {
        width: 95%;
        font-size: 22pt;
        font-weight: bold;
        font-style: italic;
        color: black;
        margin: 0;
    }
    div > .logoHolder {
        width: 200px;
        height: 200px;
        background-image: url("metro-reach.png");
        background-color: 000000;
        border: 1px solid black;
        position: relative;
        top: 0;
        left: 0;
        margin-bottom: 20vh;
    }
`;

const MissionVisionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 2pt 2pt 1pt 1pt #add8e6;
    border-radius: 5pt;
    > div {
        width: 48%;
        background-size: cover;
        background: #f5f5f5 no-repeat center;
        margin: 20pt 0;
    }
    > .Mission {
        background-image: url("no-image.png");
        border-radius: 5pt 0 0 5pt;
    }
    > .Vision {
        background-image: url("no-image.png");
        border-radius: 0 5pt 5pt 0;
    }
    > div > h2 {
        margin: 10px 0;
        font-size: 40pt;
        color: #b0c4de;
    }
    > div > p {
        width: 95%;
        font-size: 22pt;
        font-weight: bold;
        font-style: italic;
        color: #000000;
        margin: 50pt 0;
    }
`;

const ServiceDiv = styled.div `
    display: flex;
    flex-direction: column;
    box-shadow: 2pt 2pt 1pt 1pt #add8e6;
    border-radius: 5pt;
    > h2 {
        text-align: center;
        margin: 20pt 0 10pt;
        font-size: 40pt;
        color: #add8e6;
        font-weight: 600;
    }
    > .ServiceDivContent {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 10pt 0 10pt 0;
    }
    .ServiceDivContent > div {
        width: 18%;
        box-shadow: 1pt 1pt 1pt 1pt #add8e6;
        border-radius: 5pt;
        display: flex;
        flex-direction: column;
        margin: 10pt;
        :hover {
            transform: scale(1.2);
        }
    }
    .ServiceDivContent > div > h3 {
        margin: 10pt 0 5pt;
        font-size: 20pt;
        color: #b0c4de;
        text-align: left;
    }
    .ServiceDivContent > div > span {
        margin: 10px 0;
        font-size: 5pt;
        text-align: left;
    }
    .ServiceDivContent > div > span > a {
        text-decoration: none;
        color: inherit;
        :hover {
            background-color: #80808088;
        }
        :active {
            background-color: #a9a9a9;
        }
    }
    .ServiceDivContent > div > span > img {
        width: 20pt;
        height: 20pt;
        margin: 0;
    }
    .ServiceDivContent > div > p {
        margin: 10px 0 30pt;
        font-size: 15pt;
        text-align: left;
        width: 75%;
    }
    > span {
        margin: 20pt 30pt 10pt 0;
        font-size: 15pt;
        text-align: right;
        color: #dda0dd;
        width: fit-content;
        text-decoration: underline;
        align-self: flex-end;
        :hover {
            color: #b0c4de;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;
const TestimonialDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2pt 2pt 1pt 1pt #add8e6;
    border-radius: 5pt;
    align-items: center;
    > h2 {
        text-align: center;
        margin: 20pt 0 10pt;
        font-size: 40pt;
        color: #add8e6;
        font-weight: 600;
    }
    > div {
        margin: 20pt;
    }
    > div > .TestimonialImage {
        width: 50pt;
        height: 50pt;
        background-color: #add8e6;
        border: #000 1pt solid;
        border-radius: 50%;
    }
    > div > div{
        width: 50%;
    }
    > .LeftImage {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }
    > .RightImage {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-around;
    }
`;

const Home = () => {

    return (
        <MainDiv>
            <HeadBanner>
                <div className = "ImageBackground"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, non totam deserunt accusamus modi ratione quod voluptas</h1></div>
            </HeadBanner>
            <AboutDiv>
                <h2>About Metro-Reach</h2>
                <div>
                    <div className = "logoHolder"></div>
                    <div><p>Metro-Reach is an Organization established in xyz year to serve users by Numquam unde nostrum eligendi quam accusantium quia minus beatae explicabo fugiat deserunt!</p></div>
                </div>
            </AboutDiv>
            <MissionVisionDiv>
                <div className="Mission">
                    <h2>Our Mision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora placeat optio repudiandae ad ipsum omnis tenetur quibusdam earum dolor.
                    </p>
                </div>
                <div className="Vision">
                    <h2>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae aperiam inventore veniam fugit.</p>
                </div>
            </MissionVisionDiv>
            <ServiceDiv>
                <h2>What We Do</h2>
                <div className="ServiceDivContent">
                    <div>
                        <h3>Service 1</h3>
                        <span title = "Icon"><img src="" alt="service icon" /></span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt facere odio.</p>
                    </div>
                    <div>
                        <h3>Service 2</h3>
                        <span title = "Icon"><img src="" alt="service icon" /></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, autem!</p>
                    </div>
                    <div>
                        <h3>Service 3</h3>
                        <span title = "Icon"><img src="" alt="service icon" /></span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestias? Voluptatibus ea totam aliquid illo magni.</p>
                    </div>
                    <div>
                        <h3>Service 4</h3>
                        <span title = "Icon"><img src="" alt="service icon" /></span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestias? Voluptatibus ea totam aliquid illo magni.</p>
                    </div>
                </div>
                <span>
                    <Link to="/services">View More</Link>
                </span>
            </ServiceDiv>
            <TestimonialDiv>
                <h2>Hear From Our Past Clients</h2>
                <div className = "LeftImage">
                    <div className = "TestimonialImage"></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae quisquam ut expedita ipsum enim laudantium eveniet deleniti!</p>
                        <span>Jane Doe</span>
                    </div>
                </div>
                <div  className = "RightImage">
                    <div className = "TestimonialImage"></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus rem harum dolore, exercitationem consectetur. Nam, nisi.</p>
                        <span>John Doe</span>
                    </div>
                </div>
                <div className = "LeftImage">
                    <div className = "TestimonialImage"></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod!</p>
                        <span>Phantom Stranger</span>
                    </div>
                </div>
            </TestimonialDiv>
            <ContactModal />
        </MainDiv>
    );
};

export default Home;
