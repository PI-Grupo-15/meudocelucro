'use client'
import styled from "styled-components";
import Rodape from "../components/rodape";
import NavigationLogado from "../components/navigationLogado";

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
            <NavigationLogado/>
            <FundoPage></FundoPage>
            <Rodape/>
        </>
    )
}