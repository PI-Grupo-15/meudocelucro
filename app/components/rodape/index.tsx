import styled from "styled-components";

const RodapeEstilizado = styled.footer`
padding: 3em;
background-color: #FFABD3;
text-align: center;
width: 100%;
position: absolute;
height: 2.5rem;
`
const TextoEstilizado = styled.p`
font-weight: 700;
font-size: 20px;
color:#CD1E27;
font-family: Besley;
`


function Rodape(){
    return(
        <>
            <RodapeEstilizado>
                <TextoEstilizado> 2024 © Meu Doce lucro</TextoEstilizado>
            </RodapeEstilizado> 
       </>
    )
}

export default Rodape;