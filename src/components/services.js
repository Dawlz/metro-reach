import styled from "styled-components"

const MainServicesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    margin: auto;
    > div {
        width: 98%;
        margin: 10pt auto;
        border-radius: 5pt;
        border-bottom: #333 solid 1pt;
        background-color: #33333373;
    }
    > h2 {
        margin: 10px 0;
        font-size: 30pt;
        color: #b0c4de;
    }
    > div > h3 {
        width: fit-content;
        font-size: 25pt;
        margin: 10pt auto;
    }
    > div > span {
        width: fit-content;
        font-size: 10pt;
        margin: 5pt auto;
    }
    > div > p {
        width: 80%;
        font-size: 18pt;
        margin: 10pt auto;
        line-height: 1.5;
    }
`


const Services = () => {
    return (
        <MainServicesDiv>
            <h2>We offer a wide range of services for both individuals and organizations</h2>
            <div>
                <h3>Service 1</h3>
                <span title = "Icon"><img src="" alt="service icon" /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vitae. Exercitationem assumenda, natus maxime corporis perferendis esse nemo quos, distinctio atque cum neque vitae et voluptate! Sed quidem consectetur incidunt, quo delectus quis non exercitationem!</p>
            </div>
            <div>
                <h3>Service 2</h3>
                <span title = "Icon"><img src="" alt="service icon" /></span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi esse, iusto eveniet soluta nihil architecto provident reiciendis corrupti atque ducimus ullam deleniti minus voluptate voluptates veritatis ipsum perferendis suscipit reprehenderit quasi nostrum!</p>
            </div>
            <div>
                <h3>Service 3</h3>
                <span title = "Icon"><img src="" alt="service icon" /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt sit accusantium voluptatum, qui veniam eius corrupti minima nam!</p>
            </div>
            <div>
                <h3>Service 4</h3>
                <span title = "Icon"><img src="" alt="service icon" /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam vel temporibus nam fugiat harum placeat! Quis recusandae autem sunt mollitia quisquam aliquid adipisci, voluptatibus praesentium aut repudiandae vitae quae excepturi illo rem eos dolore magni delectus, qui numquam consectetur at.</p>
            </div>
            <div>
                <h3>Service 5</h3>
                <span title = "Icon"><img src="" alt="service icon" /></span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eius officiis alias harum atque fugiat, quaerat aspernatur, praesentium dolor sequi, aliquam odit natus aperiam voluptates recusandae molestiae unde expedita ab assumenda totam voluptate molestias ducimus. Molestiae alias totam magnam exercitationem placeat, quaerat voluptas. Nobis id mollitia totam. Minima.</p>
            </div>
        </MainServicesDiv>
    )
}

export default Services
