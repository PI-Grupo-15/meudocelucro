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
const FundoTexto = styled.div`
width: 1000px;
height: 500px;
border: 3px solid;
background-color: #E5FFFE;
border-radius: 5px;
border-color: #FFABD3;
margin-left: auto;
margin-right: auto;
`
const TituloEstilizado = styled.h1`
font-weight: 700;
font-size: 25px;
color:#FFABD3;
font-family: Besley;
padding: 1em 2em;
text-align: center;
`
const TextoEstilizado = styled.p`
font-weight: 600;
font-size: 20px;
color:#0097B2;
font-family: Besley;
padding: 1em 2em;
text-align: justify;
`


const About = () => {
  return (
    <>
       <Navigation/>
       <FundoPage>
        <FundoTexto>
          <TituloEstilizado>Um pouco sobre nós...</TituloEstilizado>
          <TextoEstilizado>O Meu Doce Lucro nasceu a partir de ideias de um grupo de 8 alunos da UNIVESP. Com objetivo de criar uma aplicação
            que ajudasse microempreendedores da área de confeitaria, o projeto foi idealizado para ser um lugar em que fosse possível realizar 
            três tarefas: registrar receitas, calcular o custo por unidade dessa receita e calcular o melhor lucro. </TextoEstilizado>
          <TextoEstilizado> O grupo trabalhou em conjunto para por o conhecimento adquirido nos cursos do Eixo de Computação em prática, sempre com o foco no aprendizado
            que seria adquirido na criação dessa aplicação e com o pensamento que o Meu Doce Lucro poderá ajudar muitos confeiteiros!
          </TextoEstilizado>
        </FundoTexto>
       </FundoPage>
       <Rodape/>
    </>
  )
};

export default About;