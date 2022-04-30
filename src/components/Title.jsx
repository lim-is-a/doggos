import Paw from "../images/paw-print.png"
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 1.5em;
    `
const StyledDiv = styled.div`
    width:100%;
    `
const StyledH1 = styled.h1`
    display: flex;
    justify-content: space-around;
    align-items: center;
    `


const Title = ({name}) => {
    return(
        <StyledDiv>
            <StyledH1>
            <StyledImage src={Paw} alt="paw print logo" width="100px"/>
            <StyledImage src={Paw} alt="paw print logo" width="100px"/>
            <StyledImage src={Paw} alt="paw print logo" width="100px"/>
                {name}
            <StyledImage src={Paw} alt="paw print logo" width="100px"/>
            <StyledImage src={Paw} alt="paw print logo" width="100px"/>
            <StyledImage src={Paw} alt="paw print logo" width="100px"/>
            </StyledH1>
        </StyledDiv>
    )
}

export default Title;