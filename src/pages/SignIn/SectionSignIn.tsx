import { useState } from "react";
import Inputs from "../../components/Inputs";
import { WrapperSection } from "../HomePage/SectionA";
import LogoClube from '../../assets/LOGO.png';
import { Link } from "react-router-dom";
import { ContainerSignUp, LinkWrap, Logo, SubmitButton } from "../SignUp/SectionSignUp";

export default function SectionSignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Entrar")

    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Entrando...")

    }

    return (
        <>
            <WrapperSection>
                <Logo src={LogoClube} alt="CD7 logo" />

                <ContainerSignUp>

                    <form onSubmit={handleSignIn}>
                        <Inputs>
                            <input disabled={disable} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                            <input disabled={disable} type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                            <SubmitButton disabled={disable} width="326px" widthResp="326px" >{textButton}</SubmitButton >
                        </Inputs>
                    </form>
                    <Link to="/sign-up">
                        <LinkWrap>
                            Não tem uma conta? Cadastre-se agora!
                        </LinkWrap>
                    </Link>

                </ContainerSignUp>
            </WrapperSection>
        </>
    )
}