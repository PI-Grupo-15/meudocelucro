'use client'

import React from "react";
import Navigation from "../components/navgation";
import Rodape from "../components/rodape";
import styled from "styled-components";

const FundoPage = styled.div`
background-image: url(${"./images/Imagem_Fundo_Principal.png"});
background-size: cover;
width: 100vw;
height: 100vh;
padding: 10em;
`

const About = () => {
  return (
    <>
       <Navigation/>
       <FundoPage></FundoPage>
       <Rodape/>
    </>
  )
};

export default About;