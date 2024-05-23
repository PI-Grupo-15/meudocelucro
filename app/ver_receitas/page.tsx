'use client'
import styled from "styled-components";
import Navigation from "../components/navgation";
import Rodape from "../components/rodape";

const FundoPage = styled.div`
background-image: url(${"./images/Imagem_Fundo_Principal.png"});
background-size: cover;
width: 100vw;
height: 100vh;
padding: 10em;
`

export default function VerReceitas(){
    return(
        <>
            <Navigation/>
            <FundoPage></FundoPage>
            <Rodape/>
        </>
    )
}