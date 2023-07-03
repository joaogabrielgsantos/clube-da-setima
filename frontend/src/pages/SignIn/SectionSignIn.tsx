import { useContext, useState } from "react";
import Inputs from "../../components/Inputs";
import { WrapperSection } from "../HomePage/SectionA";
import LogoClube from '../../assets/LOGO.png';
import { Link, useNavigate } from "react-router-dom";
import { ContainerSignUp, LinkWrap, Logo, SubmitButton } from "../SignUp/SectionSignUp";
import { postSignIn } from "../../services/authApi";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";


export default function SectionSignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Entrar")

    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    function cleanInputs() {
        setDisable(false);
        setTextButton("Entrar")
        setEmail('')
        setPassword('')
    }

    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Entrando...")
        const body = {
            email, password
        }
        postSignIn(body)
                .then(response => {
                    const { data } = response
                    setUserData(data)
                    toast.success('Login efetuado com sucesso!');
                    navigate("/main")
                })
                .catch(() => {
                    toast.error("Usuário e/ou senha incorretos");
                    cleanInputs()
                })

    }

    return (
        <>
            <WrapperSection>
                <Logo src={LogoClube} alt="CD7 logo" />

                <ContainerSignUp>

                    <form onSubmit={handleSignIn}>
                        <Inputs>
                            <input required disabled={disable} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                            <input required disabled={disable} type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
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