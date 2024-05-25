'use client'
import styled from "styled-components";
import Rodape from "../components/rodape";
import NavigationLogado from "../components/navigationLogado";
import { useState } from "react";

const FundoPage = styled.div`
background-image: url(${"./images/Imagem_Fundo_Principal.png"});
background-size: cover;
width: 100vw;
height: 100vh;
padding: 10em;
`
const MenuReceitas = styled.div`
width: 1200px;
height: 800px;
border: 3px solid;
background-color: #E5FFFE;
border-radius: 8px;
border-color: #FFABD3;
margin-left: auto;
margin-right: auto;
`
const TituloEstilizado = styled.h1`
font-weight: 700;
font-size: 25px;
color:#0097B2;
font-family: Besley;
padding: 2em 2em;
text-align: center;
`
const FundoReceita = styled.div`
width: 350px;
height: 350px;
border: 4px solid;
background-color: #ACDEE1;
border-radius: 8px;
border-color: #FFABD3;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;
`
const TituloReceita = styled.h1`
font-weight: 700;
font-size: 20px;
color:#FFFFFF;
font-family: Besley;
padding: 1em 1em;
text-align: center;
`
const ImagemEstilizada = styled.img`
width: 185px;
height: 185px;
margin-left: auto;
margin-right: auto;
`
const BotaoEstilizado = styled.button`
width: 40%;
background-color: #0097B2;
border-radius: 8px;
padding: 12px 16px;
color: #FFFFFF;
border: none;
margin-top: 1em;
margin-left: auto;
margin-right: auto;
font-weight: 700;
line-height: 15px;
font-family: Besley;
`
const FundoIngredientes = styled(FundoReceita)`
width: 800px;
height: 500px;
margin-top: 2em;
`
const TabelaEstilizada = styled.table`
border-collapse: collapse;
border: 2px solid;
border-color: #FFFFFF;
font-family: Besley;
color: #0097B2;
`
const CabecalhoTabela = styled.thead`
background-color: #E5FFFE;
font-weight: 700;
`
const RodapeTabela = styled.tfoot`
background-color: #E5FFFE;
font-weight: 700;
`
const ColunaTabela = styled.td`
border: 1px solid;
border-color:#FFFFFF;
padding: 8px 10px;
`
const LinhaTabela = styled.tr`
border: 1px solid;
border-color:#FFFFFF;
padding: 8px 10px;
`


export default function VerReceitas(){

    const[receitaSelecionada, setReceitaSelecionada] = useState(0);

    function Receita(){
        setReceitaSelecionada(receitaSelecionada+1)
    }
    return(
        <>
       
                    {receitaSelecionada === 0 ?(
                        <>
                        <NavigationLogado/>
                        <FundoPage>
                            <MenuReceitas>
                                <TituloEstilizado>Receitas Cadastradas</TituloEstilizado>                  
                        <FundoReceita>
                            <TituloReceita>Brigadeiro de Leite Ninho</TituloReceita>
                            <ImagemEstilizada src='images/Brigadeiro_ninho.png'/>
                            <BotaoEstilizado onClick={Receita}>Abrir Receita</BotaoEstilizado>
                        </FundoReceita>
                        </MenuReceitas>
                        </FundoPage>
                        <Rodape/>
                        </>):(
                    
                    
                        <>
                            <NavigationLogado/>
                            <FundoPage>
                                <MenuReceitas>
                                    <FundoIngredientes>
                                        <TituloReceita>Brigadeiro de Leite Ninho</TituloReceita>
                                        <TabelaEstilizada>
                                            <CabecalhoTabela>
                                                <LinhaTabela>
                                                    <ColunaTabela>Ingrediente</ColunaTabela>
                                                    <ColunaTabela>Quantiade Usada</ColunaTabela>
                                                    <ColunaTabela>Quantidade Comprada</ColunaTabela>
                                                    <ColunaTabela>Valor Gasto</ColunaTabela>
                                                    <ColunaTabela>Valor por Unidade</ColunaTabela>
                                                </LinhaTabela>
                                            </CabecalhoTabela>
                                            <tbody>
                                                <LinhaTabela>
                                                    <ColunaTabela>Leite Condensado</ColunaTabela>
                                                    <ColunaTabela>27 gramas</ColunaTabela>
                                                    <ColunaTabela>395 gramas</ColunaTabela>
                                                    <ColunaTabela>R$ 9,00 </ColunaTabela>
                                                    <ColunaTabela>R$ 0,62</ColunaTabela>
                                                </LinhaTabela>
                                                <LinhaTabela>
                                                    <ColunaTabela>Leite Ninho</ColunaTabela>
                                                    <ColunaTabela>10 gramas</ColunaTabela>
                                                    <ColunaTabela> 380 gramas</ColunaTabela>
                                                    <ColunaTabela>R$ 24,00 </ColunaTabela>
                                                    <ColunaTabela>R$ 0,65</ColunaTabela>
                                                </LinhaTabela>
                                                <LinhaTabela>
                                                    <ColunaTabela>Manteiga</ColunaTabela>
                                                    <ColunaTabela>1,5 gramas</ColunaTabela>
                                                    <ColunaTabela>200 gramas</ColunaTabela>
                                                    <ColunaTabela>R$ 14,00 </ColunaTabela>
                                                    <ColunaTabela>R$ 0,10</ColunaTabela>
                                                </LinhaTabela>
                                            </tbody>
                                            <RodapeTabela>
                                                <LinhaTabela>
                                                    <ColunaTabela>Total Custo por Unidade</ColunaTabela>
                                                    <ColunaTabela> </ColunaTabela>
                                                    <ColunaTabela> </ColunaTabela>
                                                    <ColunaTabela> </ColunaTabela>
                                                    <ColunaTabela> R$ 1,40</ColunaTabela>
                                                </LinhaTabela>
                                            </RodapeTabela>
                                        </TabelaEstilizada>
                                    </FundoIngredientes>
                                </MenuReceitas>
                            </FundoPage>
                            <Rodape/>
                        </>
                    )}
        </>
               
    )
}