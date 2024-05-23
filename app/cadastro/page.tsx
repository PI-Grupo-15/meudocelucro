'use client'

import { useState } from "react";
import styled from "styled-components";
import CampoDigitacao from "../components/campoDigitacao";
import { useRouter } from "next/navigation";


const ContainerPrincipal = styled.div`
background-image: url(${"./images/Imagem_Fundo.png"});
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
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
const Formulario = styled.form`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
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

export default function cadastro(){
    const[nome, setNome] = useState('');
    const[nascimento, setNascimento] = useState('');
    const[telefone, setTelefone] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[senhaVerificada, setSenhaVerificada] = useState('');
    const router = useRouter();


    return(
        <>
            <ContainerPrincipal>
                <Container>

                    <Imagem src='/images/logo.png'alt="logo meu docelucro"/>
                    <Titulo>Preencha com seus dados para efetuar o cadastro:</Titulo>
                    <Formulario>
                        <CampoDigitacao 
                        valor={nome} 
                        tipo="text"
                        placeholder="Insira seu nome completo" 
                        onChange={setNome} 
                        label="Nome"/>

                        <CampoDigitacao 
                        valor={nascimento} 
                        tipo="text"
                        placeholder="Insira dia/mês/ano" 
                        onChange={setNascimento} 
                        label="Data de Nascimento"/>

                        <CampoDigitacao 
                        valor={telefone} 
                        tipo="text"
                        placeholder="(DDD) XXXXX-XXXX" 
                        onChange={setTelefone} 
                        label="Telefone"/>

                        <CampoDigitacao 
                        valor={email} 
                        tipo="text"
                        placeholder="Insira o endereço de e-mail para login" 
                        onChange={setEmail} 
                        label="Email"/>
                    
                        <CampoDigitacao
                        valor={senha}
                        tipo="password"
                        placeholder="Digite sua senha"
                        onChange={setSenha}
                        label="Crie uma senha"/>

                        <CampoDigitacao 
                        valor={senhaVerificada} 
                        tipo="text"
                        placeholder="Repita a senha anterior" 
                        onChange={setSenhaVerificada} 
                        label="Repita a senha"/>
                    
                    </Formulario>
                    <BotaoCustomizado onClick={() => router.push('/login')} type="submit">Cadastrar</BotaoCustomizado>
            </Container>
        </ContainerPrincipal>
        </>

    )
}