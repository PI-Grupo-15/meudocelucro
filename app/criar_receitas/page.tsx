'use client'
import styled from "styled-components";
import Navigation from "../components/navgation";
import Rodape from "../components/rodape";
import { Button } from "@nextui-org/react";

const FundoPage = styled.div`
background-image: url(${"./images/Imagem_Fundo_Principal.png"});
background-size: cover;
width: 100vw;
height: 100vh;
padding: 10em;
`
const BotaoEstilizado = styled.button`
background-color: #0097B2;
border-radius: 8px;
padding: 10px 10px;
color: #FFFFFF;
border: none;
font-weight: 700;
line-height: 25px;
font-family: Besley;
width: 25%;
margin-left: auto;
margin-right: auto;
`

export default function CriarReceitas(){
    return(
        <>
            <Navigation/>
            <FundoPage>
                <div>
                    <BotaoEstilizado type="button">Nova Receita</BotaoEstilizado>
            <table>
                <thead>
                <tr>
                    <th>Ingredientes</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Quantidade Comprada</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
                </div>
            </FundoPage>
            <Rodape/>
        </>
    )
}