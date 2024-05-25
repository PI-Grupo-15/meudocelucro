'use client'
import styled from "styled-components";
import NavigationLogado from "../components/navigationLogado";
import Rodape from "../components/rodape";
import { Button } from "@nextui-org/react";
import CampoDigitacao from "../components/campoDigitacao";
import { useState } from "react";
import DigitacaoConversor from "../components/digitacaoConversor";

const FundoPage = styled.div`
background-image: url(${"./images/Imagem_Fundo_Principal.png"});
background-size: cover;
width: 100vw;
height: 100vh;
padding: 10em;
`
const FundoFormulario = styled.div`
width: 1500px;
height: 800px;
border: 3px solid;
background-color: #E5FFFE;
border-radius: 8px;
border-color: #FFABD3;
margin-left: auto;
margin-right: auto;
aling-items: center;
`
const BotaoEstilizado = styled.button`
background-color: #0097B2;
border-radius: 8px;
padding: 8px 8px;
color: #FFFFFF;
border: none;
font-weight: 700;
line-height: 30px;
font-family: Besley;
width: 40%;
margin-left: auto;
margin-right: auto;
margin-top: 3em;
`
const BotaoAdd = styled.button`
background-color: #0097B2;
border-radius: 8px;
padding: 8px 8px;
color: #FFFFFF;
border: none;
font-weight: 700;
line-height: 25px;
font-family: Besley;
width: 25%;
margin-left: auto;
margin-right: auto;
margin-top: 2em;
`
const Digitacao = styled.div`
margin-top: 2em;
display: grid;
text-align: center;
`
const Titulo = styled.h1`
font-weight: 700;
font-size: 20px;
color:#0097B2;
font-family: Besley;
padding: 1em 1em;
text-align: center;

`
const Ingredientes = styled.div`
display: flex;
flex-direction: row;
width: 60%;
text-align: center;
margin-left: auto;
margin-right: auto;
`

const TabelaEstilizada = styled.table`
border-collapse: collapse;
border: 2px solid;
border-color: #FFABD3;
font-family: Besley;
font-size: 20px;
color: #0097B2;
margin-left: auto;
margin-right: auto;
margin-top: 3em;
`
const CabecalhoTabela = styled.thead`
background-color: #FFFFFF;
font-weight: 700;
`

const ColunaTabela = styled.td`
border: 1px solid;
border-color:#FFABD3;
padding: 10px 15px;
`
const LinhaTabela = styled.tr`
border: 1px solid;
border-color:#FFABD3;
padding: 12px 15px;
`
export default function CriarReceitas(){
    const [ingrediente, setIngrediente] = useState('');
    const[quantidadeUsada, setQuantidadeUsada] = useState('');
    const[quantidadeComprada, setQuantidadeComprada] = useState('');
    const[valorGasto, setValorGasto] = useState('');
    const[novaReceita, setNovaReceita] = useState(0);
    const[nomeReceita, setNomeReceita] = useState('')

    function CriandoReceita(){
        setNovaReceita(novaReceita+1);
    }
    return(
        <>
            {novaReceita === 0 ? (
                <>
                    <NavigationLogado/>
                        <FundoPage>
                            <FundoFormulario>
                                <Titulo>Criar Receita</Titulo>
                                <Digitacao>
                                    <DigitacaoConversor
                                    valor={nomeReceita} 
                                    tipo="text"
                                    placeholder="Insira o Título da Receita" 
                                    onChange={setNomeReceita} 
                                    label= "Titulo da Receita"/>

                                    <BotaoEstilizado onClick={CriandoReceita}>Nova Receita</BotaoEstilizado>
                                </Digitacao>

                                
                            </FundoFormulario>
                        </FundoPage>
                    <Rodape/>
                
                
                </>
            ): (
                <>
                    <NavigationLogado/>
                        <FundoPage>
                            <FundoFormulario>
                                <Titulo>Criar Receita</Titulo>
                                <Ingredientes>
                                    <DigitacaoConversor
                                    valor={ingrediente} 
                                    tipo="text"
                                    placeholder="" 
                                    onChange={setIngrediente} 
                                    label="Ingrediente (Ex:Farinha de Trigo) : "/>

                                    <DigitacaoConversor
                                    valor={quantidadeUsada} 
                                    tipo="text"
                                    placeholder="" 
                                    onChange={setQuantidadeUsada} 
                                    label="Quantidade Usada(gramas):"/>
                                </Ingredientes>
                                <Ingredientes>

                                    <DigitacaoConversor
                                    valor={quantidadeComprada} 
                                    tipo="text"
                                    placeholder="" 
                                    onChange={setQuantidadeComprada} 
                                    label="Quantidade Comprada(gramas) :"/>

                                    <DigitacaoConversor
                                    valor={valorGasto} 
                                    tipo="text"
                                    placeholder="" 
                                    onChange={setValorGasto} 
                                    label="Valor Gasto no Ingred. (Ex: R$ 20,00) : "/>

                                    
                                </Ingredientes>
                                <Ingredientes>
                                    <BotaoAdd type="button">Adicionar Ingrediente</BotaoAdd>
                                </Ingredientes>
                                <TabelaEstilizada>
                                    <CabecalhoTabela>
                                    <LinhaTabela>
                                        <ColunaTabela>Ingredientes</ColunaTabela>
                                        <ColunaTabela>Quantidade Usada</ColunaTabela>
                                        <ColunaTabela>Quantidade Comprada</ColunaTabela>
                                        <ColunaTabela>Valor Gasto</ColunaTabela>
                                    </LinhaTabela>
                                    </CabecalhoTabela>
                                    <tbody>

                                    </tbody>
                                </TabelaEstilizada>
                            </FundoFormulario>
                        </FundoPage>
                    <Rodape/>
                </>
            )}
               
        </>
    )
}