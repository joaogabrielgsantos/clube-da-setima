import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Wrapper>
                <ContainerA>
                    <Logo>
                    <Link to="/"><img src="/LOGO.png" alt="logo" /></Link>
                    </Logo>
                    <SignWrapper>
                        <Link to="/sign-up"><p>Cadastre-se</p></Link>
                        <Link to="/sign-in"> <Button text='Entrar' width='157px' type="primary" /> </Link>
                    </SignWrapper>
                </ContainerA>
            </Wrapper>

        </>
    );
}


export default Header


const Wrapper = styled.div`
height: 150px;
background-color: #EAE0D5;
`;
const ContainerA = styled.div`
height: 100%;
max-height: fit-content;
padding: 0 50px 0 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const SignWrapper = styled.div`
display: flex;
height: 100%;
width: 50%;
align-items: center;
justify-content: right;
font-weight: 300;
font-size: 20px;
line-height: 25px;
color: #5E503F;
p {
    margin-right: 30px;
}
`;



const Logo = styled.div`
height: 120px;
width: 150px;
display: flex;
justify-content: center;
align-items: center;
img {
    height: 120px;
    object-fit: cover;
}

`;