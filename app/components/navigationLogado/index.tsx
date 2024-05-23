import styled from "styled-components";
import Logo from "../navgation/navbar/Logo";
import Link from "next/link";

const FundoCabecalho = styled.div`
height: 100%;
padding: 1em;
background-color: #FFABD3;
width: 100%;
display: flex;
align-items: center;
`
const TextoEstilizado = styled.p`
font-weight: 700;
font-size: 20px;
color:#CD1E27;
font-family: Besley;
`
const ListaEstilizada = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
flex-grow: .5;
padding: 0 1em;
`
const ImagemEstilizada = styled.img`
margin-top = 1em;
`
const ContainerPerfil = styled.div`
display: flex;
justify-content: space-around;
padding: 1em;
`
const TextoSaida = styled.p`
padding: 0 0 0 3em;
color:#0097B2;
font-size: 18px;
font-weight: 700;
font-family: Besley;
text-decoration: underline;
`

function NavigationLogado(){
  return (
    <>
      <FundoCabecalho>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ListaEstilizada>
              <li>
                <Link href="/principal_page_logado">
                  <TextoEstilizado>Home</TextoEstilizado>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <TextoEstilizado>Sobre nós</TextoEstilizado>
                </Link>
              </li>
              <li>
                <Link href="/criar_receitas">
                  <TextoEstilizado>Criar receitas</TextoEstilizado>
                </Link>
              </li>
              <li>
                <Link href="/ver_receitas">
                  <TextoEstilizado>Ver Receitas</TextoEstilizado>
                </Link>
              </li>
            </ListaEstilizada>
            <ContainerPerfil>
                <ListaEstilizada>
                    <li>
                        <ImagemEstilizada src="/images/Graphic.png"/>
                    </li>
                    <li>
                        <Link href = "/principal_page">
                            <TextoSaida>Sair</TextoSaida>
                        </Link>
                    </li>
                </ListaEstilizada>
            </ContainerPerfil>
          </div>
        </div>
      </FundoCabecalho>
    </>
  );
};

export default NavigationLogado;