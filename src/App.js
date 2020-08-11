import React from 'react';
import  styled from 'styled-components';
import './App.css';
import Logo from './assets/img/logo.png'
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #fff159;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  margin-top: 8px;
  border-bottom: 1px solid gray;
`;

const LogoImg = styled.img`
  min-width: 44px;
  height: 32px;
  display: flex;
  margin-right: 12px;
  margin-left: 12px;
`

const Input = styled.input`
  min-width: 326px;
  height: 33px; 
  margin-right: 12px;
`;

const IconsNav = styled.p`
  min-width: 45px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const InfoCep = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000;
  margin-left: 12px;
  padding: 5px;
  font-size: 12px;
`;

const PaymentMenu = styled.section`
  background: #ebebeb;
  display: flex;
  flex-grow: 1;
`;

const MainDiv = styled.div`
  background: #FFF;
  display: flex;
`;

function App() {
  return (
    <DivBody>
    <HeaderContainer className="App">
        <Nav>
          <LogoImg src={Logo}/>
          <Input placeholder="Buscar produtos, marcos e muito mais ..."/>
          <IconsNav>M</IconsNav>
          <IconsNav>S</IconsNav>
        </Nav>
        
        <InfoCep href="#"> Informe seu CEP</InfoCep>
        <Carousel />
    </HeaderContainer>    

    <PaymentMenu>
      <MainDiv>

      </MainDiv>
    </PaymentMenu>
    </DivBody>
  );
}

export default App;
