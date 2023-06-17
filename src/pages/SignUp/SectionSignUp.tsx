import { useState } from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../components/Container";
import Inputs from "../../components/Inputs";
import { WrapperSection } from "../HomePage/SectionA";
import { Button } from "../../components/Button";
import LogoClube from '../../assets/LOGO.png';
import { Link } from "react-router-dom";



export default function SectionSignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [accessKey, setAccessKey] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Cadastrar")

    function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Cadastrando...")

    }

    return (
        <>
            <WrapperSection>
                <Logo src={LogoClube} alt="CD7 logo" />

                <ContainerSignUp>

                    <AuthForm onSubmit={handleSignUp}>
                        <Inputs>
                            <input disabled={disable} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                            <input disabled={disable} type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                            <input disabled={disable} type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            <input disabled={disable} type="accesskey" placeholder="Chave de acesso" value={accessKey} onChange={e => setAccessKey(e.target.value)} />
                            <SubmitButton disabled={disable} width="326px" widthResp="326px" >{textButton}</SubmitButton >
                        </Inputs>
                        <Link to="/sign-in">
                        <LinkWrap>
                            Já tem uma conta? Entre agora!
                        </LinkWrap>
                    </Link>
                    </AuthForm>
                    

                </ContainerSignUp>
            </WrapperSection>
        </>
    )
}


export const ContainerSignUp = styled(ContainerWrapper)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const SubmitButton = styled(Button)`
margin-top: 20px;
@media (max-width: 800px) {
    height: 50px;
}
`;

export const Logo = styled.img`
display: block;
    height: 500px;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    z-index: -2;
    opacity: 0.05;
    
@media (min-width: 1440px) {
    bottom: 250px; 
} 
`;

export const LinkWrap = styled.div`
    margin-top: 10px;
	text-decoration-line: underline;
    color: #000000;
`;

const AuthForm= styled.form`

height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;

