import styled from 'styled-components'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoClube from '../assets/LOGO.png';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <AppBarHeader position='static'>
            <ContainerHeader>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <Logo src={LogoClube} alt="CD7 logo" />
                        </Link>
                    </Typography>
                    <AuthWrapper>
                        <a href="/sign-up">
                            <h6>Cadastre-se</h6>
                        </a>
                        <Link to="/sign-in">
                            <Button width="170px" widthResp="80px" styling='primary'>Entrar</Button>
                        </Link>
                    </AuthWrapper>
                </Toolbar>
            </ContainerHeader>
        </AppBarHeader>
    );
}

const Logo = styled.img`
width: 270px;
height: auto;
margin-left: -70px;
@media (max-width: 800px) {
    width: 150px;
    margin-left: -25px;
} 
`;
const AppBarHeader = styled(AppBar)`
height: 150px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
    height: auto;
} 
`;

const ContainerHeader = styled.div`
width: 100%;
max-width: 1440px;
height: 100%;
padding: 0 107px;
@media (max-width: 800px) {
    padding: 0;
} 

`;
const AuthWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
a {
    text-decoration: none;
    
}
h6 {
    font-size: 16px;
    font-weight: 300;
    color: #000000;
    margin-right: 20px;
    @media (max-width: 800px) {
        font-size: 12px;
    } 
}
`;