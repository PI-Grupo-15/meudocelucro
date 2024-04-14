import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./ButtonEntrar";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-rose-300 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
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
            </button>
            <ul className="hidden md:flex gap-x-6 text-cyan-600 ">
              <li>
                <Link href="/principal_page">
                  <p>Página principal</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Sobre nós</p>
                </Link>
              </li>
              <li>
                <Link href="/criar_receitas">
                  <p>Criar receitas</p>
                </Link>
              </li>
              <li>
                <Link href="/ingredientes">
                  <p>Ingreditentes</p>
                </Link>
              </li>
              <li>
                <Link href="/ver_receitas">
                  <p>Ver receitas</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contato</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;