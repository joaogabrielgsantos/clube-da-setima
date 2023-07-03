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
                            <OtherLink to="/sign-up">
                                <Button width="220px" widthResp="120px" styling="primary">Comece agora</Button>
                            </OtherLink>
                        </TypoWrapper>
                        <SideImage src={pipoca} alt="pipoca" />
                    </WrapperAll>
                </Container>
            </WrapperSection>
        </>
    )
}


export const WrapperSection = styled.div`
display: flex;
justify-content: center;
height: 75vh;
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
@media (max-width: 1250px) {
    text-align: center;
    align-items: center;
    position: absolute;
}
`;

const SideImage = styled.img`
height: 100%;
object-fit: cover;
overflow: hidden;
z-index: -1;
@media (max-width: 800px) {
    height: 80%;
} 
`;

const OtherLink = styled(Link)`
text-decoration: none;


`;