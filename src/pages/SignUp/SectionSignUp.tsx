import { useState } from "react";
import styled from "styled-components";
import { ContainerWrapper } from "../../components/Container";
import Inputs from "../../components/Inputs";
import { WrapperSection } from "../HomePage/SectionA";
import { Button } from "../../components/Button";
import LogoClube from '../../assets/LOGO.png';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { postSignUp } from "../../services/api";


export default function SectionSignUp() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [key, setKey] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(false)
    const [textButton, setTextButton] = useState<string>("Cadastrar")


    const navigate = useNavigate();

    function cleanInputs() {
        setDisable(false);
        setTextButton("Cadastrar")
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setKey('')
    }


    async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Cadastrando...")
        const body = {
            email, password, key
        }
        if (password !== confirmPassword) {
            toast.error('As senhas devem ser iguais!');
            cleanInputs()
        } else {
            postSignUp(body)
                .then(response => {
                    toast.success('Usuário cadastrado com sucesso');
                    console.log(response)
                    navigate("/");
                })
                .catch((err) => {
                    toast.error("Não foi possível realizar o cadastro");
                    if (err.response.data.message) {
                        toast.error(`${err.response.data.message}`);
                    } else {
                        toast.error(`${err.response.data}`);
                    }
                    cleanInputs()
                })
        }

    }

    return (
        <>
            <WrapperSection>
                <Logo src={LogoClube} alt="CD7 logo" />
                <ContainerSignUp>
                    <AuthForm onSubmit={handleSignUp}>
                        <Inputs>
                            <input required disabled={disable} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                            <input required disabled={disable} type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                            <input required disabled={disable} type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            <input required disabled={disable} placeholder="Chave de acesso" value={key} onChange={e => setKey(e.target.value)} />
                            <SubmitButton type="submit" disabled={disable} width="326px" widthResp="326px" >{textButton}</SubmitButton >
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

const AuthForm = styled.form`

height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;

