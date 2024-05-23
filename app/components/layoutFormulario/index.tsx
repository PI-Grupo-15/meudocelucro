
import styled from "styled-components"

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

export default function layoutFormulario(){
    return(
        <ContainerPrincipal>
            <Container>
                
            </Container>
            
        </ContainerPrincipal>

    )
}