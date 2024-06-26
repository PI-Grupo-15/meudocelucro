import styled from "styled-components";

interface Props{
    valor: string;
    tipo: string;
    placeholder: string;
    onChange:(value:string) => void;
    label?: string;
}

const Campo = styled.input`
background: #F0F0F0;
margin: 10px;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
border-radius: 8px;
border: none;
width: 100%;
padding: 15px;
color: #828282;
font-family: Besley;
`
const Rotulo = styled.label`
display: block;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #CD1E27;
font-family: Besley;
margin: 0 1em;
`
const Container= styled.div`
width: 25%;
margin-left: auto;
margin-right: auto;
`

export default function DigitacaoConversor({valor, tipo, placeholder, onChange, label}: Props){
    return(
        <Container>
            <Rotulo>{label}</Rotulo>
            <Campo
            type={tipo}
            value={valor}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required
            />
        </Container>
    )
}