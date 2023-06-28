import styled from 'styled-components';
import LogoClube from '../assets/LOGO.png';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuVisible, setMenuVisible] = useState(false);

  function handleMenu() {
    setMenuVisible(!isMenuVisible);
  }

  function handleAccount() {
    window.localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <AppBar position="static">
        <MainNav>
          <Wrapper>
            <MenuIcon sx={{cursor: "pointer"}} onClick={handleMenu} fontSize="medium" />
            <Logo src={LogoClube} alt="CD7 logo" />
          </Wrapper>
          <LogoutIcon sx={{cursor: "pointer"}} onClick={handleAccount} fontSize="medium" />
        </MainNav>
      </AppBar>
      <Menu
        className={isMenuVisible ? 'show-menu' : 'hide-menu'}
        ref={menuRef}
      >
        <Link to="/main">
          <li>Início</li>
        </Link>
        <Link to="/film">
          <li>Filme da semana</li>
        </Link>
        <Link to="/settings">
          <li>Configurações</li>
        </Link>

      </Menu>
      {isMenuVisible && <Overlay onClick={() => setMenuVisible(false)} />}
    </>
  );
}

const MainNav = styled.div`
  background-color: #eae0d5;
  height: 120px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    height: 10vh;
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 150px;
  }
`;

const Logo = styled.img`
  width: 220px;
  @media (max-width: 800px) {
    width: 140px;
  }
`;

const Menu = styled.div`
  background-color: #22333b;
  width: 20%;
  height: 35%;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 40%;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  a{
    text-decoration: none;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  li{
    list-style: none;
    color: #ffffff;
    :hover {
      color: #bdbdbd;
    }
  }
  &.hide-menu {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  }
  &.show-menu {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
  }

  @media (max-width: 800px) {
    top: 10vh;
    height: 90vh;
    width: 50%;
    border-radius: 0;
    justify-content: start;
    align-items: baseline;
    a{
      margin: 30px 0 0 0;
      padding-left: 15px;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(189, 187, 187, 0.4);
  z-index: 1;
`;
