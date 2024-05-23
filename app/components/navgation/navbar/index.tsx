import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./ButtonEntrar";
import styled from "styled-components";

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

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <FundoCabecalho>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            {/* <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button> */}
            <ListaEstilizada>
              <li>
                <Link href="/principal_page">
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
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </FundoCabecalho>
    </>
  );
};

export default Navbar;