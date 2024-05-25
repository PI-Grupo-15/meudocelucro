'use client'

import React, { useState } from "react";
import Navigation from "../components/navgation";
import Rodape from "../components/rodape";
import styled from "styled-components";
import CampoDigitacao from "../components/campoDigitacao";
import DigitacaoConversor from "../components/digitacaoConversor";

const FundoPage = styled.div`
background-image: url(${"./images/Imagem_Fundo_Principal.png"});
background-size: cover;
width: 100vw;
height: 100vh;
padding: 10em;
`
const FundoConvesor = styled.div`
width: 650px;
height: 660px;
border: 3px solid;
background-color: #FFFFFF;
border-radius: 8px;
border-color: #0097B2;
margin-left: auto;
margin-right: auto;
`
const TextoAzul = styled.p`
font-weight: 700;
font-size: 20px;
color:#0097B2;
font-family: Besley;
padding: 2em 2em;
text-align: center;
`
const TextoVermelho = styled.p`
font-weight: 700;
font-size: 20px;
color:#CD1E27;
font-family: Besley;
padding: 0 2em;
text-align: center;
`
const TextoConversor = styled(TextoAzul)`
font-size: 25px;
padding: 3em 2em;
text-decoration: underline overline;
`
const ContainerConversor = styled.div`
display: flex;
flex-direction: row;
`
const ContainerInput = styled.div`
display: flex;
flex-direction: column;
width: 60%;
`
const ContainerSeletor = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const Seletor = styled.select`
padding: 1em;
background-color: #F0F0F0;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
border-radius: 5px;
border: none;
color: #828282;
font-family: Besley;
width: 25%
align-items: center;
margin-top: 2em;
`

const Principal_page = () => {
  const[medidaInserida, setmedidaInserida] = useState("");
  const[medidaCalculada, setmedidaCalculada] = useState('');
  
  return (  
    <>
      <Navigation/>
        <FundoPage>
          <FundoConvesor>
            <TextoAzul>A plataforma Meu Doce Lucro é perfeita para confeiteiros que queiram calcular o preço de seus produtos de forma fácil e eficiente.
            </TextoAzul>
            <TextoVermelho>Faça login e aproveite todas as funcionalidades da plataforma!</TextoVermelho>
            <TextoConversor>Conversor de Medidas</TextoConversor>
            <ContainerConversor>
              <ContainerInput>
                  <DigitacaoConversor
                  valor={medidaInserida} 
                  tipo="text"
                  placeholder="" 
                  onChange={setmedidaInserida} 
                  label="Quantidade: "/>

                  <DigitacaoConversor
                  valor={medidaCalculada} 
                  tipo="text"
                  placeholder="" 
                  onChange={setmedidaCalculada} 
                  label="Quantidade: "/>

                </ContainerInput>
                <ContainerSeletor>
                  <Seletor>
                    <option>gramas</option>
                    <option>colher de chá</option>
                    <option>colher de sopa</option>
                    <option>xícara</option>
                    <option>mililitros</option>
                    <option>litros</option>
                  </Seletor>
                  <Seletor>
                    <option>gramas</option>
                    <option>colher de chá</option>
                    <option>colher de sopa</option>
                    <option>xícara</option>
                    <option>mililitros</option>
                    <option>litros</option>
                  </Seletor>
                </ContainerSeletor>
              </ContainerConversor>
            
          </FundoConvesor>
        </FundoPage>
      <Rodape/>
    </>  
  
  )
};

export default Principal_page;