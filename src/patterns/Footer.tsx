import styled from "styled-components"

export default function Footer() {
    return (
        <>
            <Wrapper>
                <a href="https://linktr.ee/gabrielgang?utm_source=linktree_profile_share&ltsid=a8790f0f-4595-432e-a630-ac531f64f530" target="_blank">
                    <h2>by @gabrielgang</h2>
                </a>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 200px;
background-color: #000000;
display: flex;
justify-content: center;
align-items: center;
position: relative;
bottom: 0;

a {
    color: #ffffff;
    text-decoration: none;
    h2 {
        font-weight: 300;
        font-size: 14px;
    }  
}
@media (max-width: 800px) {
    position: absolute ;
} 


`;