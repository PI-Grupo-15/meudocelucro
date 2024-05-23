"use client"

import { useState } from "react";
import CampoDigitacao from "../components/campoDigitacao";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const ContainerPrincipalLogin = styled.div`
background-image: url(${"./images/Imagem_Fundo.png"});
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
const ContainerLogin = styled.div`
background-color: white;
width: 50vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Imagem = styled.img`
width: 300px;
height: 234px;
padding: 2em 2em;
`
const Titulo = styled.h2`
font-size: 26px;
color:#CD1E27;
font-weight: 700;
line-height: 28px;
font-family: Besley;
`
const Paragrafo = styled.p`
font-size: 16px;
font-weight: 400;
color: #0097B2;
line-height: 19px;
font-family: Besley;
margin-top: 1em;
`
const ParagrafoCadastro = styled(Paragrafo)`
color: #0097B2;
`
const LinkEstilizado = styled.a`
font-weight: 700;
color: #CD1E27;
text-decoration: none;
`
const BotaoCustomizado = styled.button`
width: 40%;
background-color: #0097B2;
border-radius: 8px;
padding: 12px 16px;
color: #FFFFFF;
border: none;
margin-top: 1em;
font-weight: 700;
line-height: 19px;
font-family: Besley;
`
const Formulario = styled.form`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
`

export default function Login(){
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const router = useRouter();
    return(
        <>
        <ContainerPrincipalLogin>
            <ContainerLogin>

            <Imagem src='/images/logo.png'alt="logo meu docelucro"/>
            <Titulo>Faça login em sua Conta</Titulo>
            <Formulario>
                <CampoDigitacao 
                valor={email} 
                tipo="text"
                placeholder="Insira seu endereço de e-mail" 
                onChange={setEmail} 
                label="Email"/>
            
                <CampoDigitacao
                valor={senha}
                tipo="password"
                placeholder="Insira sua senha"
                onChange={setSenha}
                label="Senha"/>
            </Formulario>
            <BotaoCustomizado type="submit" onClick={() => router.push('/principal_page_logado')}>Entrar</BotaoCustomizado>
            <Paragrafo>Esqueceu sua senha?</Paragrafo>
            <ParagrafoCadastro>Ainda não tem conta? <LinkEstilizado href="/cadastro">Faça seu Cadastro!</LinkEstilizado></ParagrafoCadastro>
            </ContainerLogin>
        </ContainerPrincipalLogin>
        </>
    )
}