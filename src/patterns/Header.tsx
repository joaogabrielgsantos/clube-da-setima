import styled from 'styled-components'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoClube from '../assets/LOGO.png';

export default function Header() {
    return (
        <AppBarHeader position="fixed">
            <ContainerHeader>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/" target="_blank">
                            <Logo src={LogoClube} alt="CD7 logo" />
                        </a>
                    </Typography>
                    <AuthWrapper>
                        <h6>Cadastre-se</h6>
                        <Button href="/sign-in" size='small' variant='contained' color="secondary" sx={{
                            textTransform: 'none',
                            width: '100px',
                            height:'40px',
                            '@media (min-width: 700px)': {
                                width: '157px',
                            }
                        }}>Entrar</Button>
                    </AuthWrapper>
                </Toolbar>
            </ContainerHeader>
        </AppBarHeader>
    );
}

const Logo = styled.img`
width: 270px;
height: auto;

@media (max-width: 700px) {
        width: 150px;
    } 
`;
const AppBarHeader = styled(AppBar)`
height: 150px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 700px) {
        height: auto;
    } 

`;

const ContainerHeader = styled.div`
width: 100%;
max-width: 1440px;
height: 100%;
padding: 0 107px;

@media (max-width: 700px) {
        padding: 0;
    } 

`;
const AuthWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
h6 {
    font-size: 13px;
    margin-right: 20px;
    @media (max-width: 700px) {
        display: none;
    } 
}
`;