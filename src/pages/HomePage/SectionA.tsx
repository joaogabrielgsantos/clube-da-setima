import styled from "styled-components";
import { Container } from "../../components/Container";
import { MainSubtitle, MainTitle } from "../../components/Typography";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import pipoca from '../../assets/pipoca.jpg';

export default function SectionA() {

    return (
        <>
            <WrapperSection>
                <Container>
                    <WrapperAll>
                        <TypoWrapper>
                            <MainTitle>Bem-vindos ao clube!</MainTitle>
                            <MainSubtitle>Viva o cinema de forma intensa: discuta, questione, inspire-se.</MainSubtitle>
                            <Link to="/sign-in">
                                <Button width="220px" widthResp="120px" styling="primary">Comece agora</Button>
                            </Link>
                        </TypoWrapper>
                        <SideImage src={pipoca} alt="pipoca" />
                    </WrapperAll>
                </Container>
            </WrapperSection>

        </>
    )
}


const WrapperSection = styled.div`
display: flex;
justify-content: center;
height: 70vh;
padding-top: 150px;

@media (max-width: 1440px) {
    height: 100vh;    
}

@media (max-width: 800px) {
    padding-top: 100px;
    height: 60vh;   
} 

`;

const WrapperAll = styled.div`
display: flex;
align-items: center;
height: 100%;
@media (max-width: 800px) {
    justify-content: center;
}
`;

const TypoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 60px;

@media (max-width: 1200px) {
    margin-top: 0;
    text-align: center;
    align-items: center;
    position: absolute;
}
`;

const SideImage = styled.img`
height: 100%;
object-fit: cover;
overflow: hidden;

`;
