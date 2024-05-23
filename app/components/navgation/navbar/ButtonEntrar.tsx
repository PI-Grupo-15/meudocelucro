'use client'

import { useRouter } from "next/navigation";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
background-color: #0097B2;
border-radius: 8px;
padding: 10px 30px;
color: #FFFFFF;
border: none;
font-weight: 700;
line-height: 25px;
font-family: Besley;
width: 100%;
`

const ButtonEntrar = () => {
  const router = useRouter()
  return (
    <BotaoEstilizado type="button" onClick={() => router.push('/login')}>Entrar</BotaoEstilizado>
  );
}; 

export default ButtonEntrar;
