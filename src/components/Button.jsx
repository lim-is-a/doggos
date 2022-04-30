import Paw from "../images/paw-print.png"
import styled from 'styled-components'

const StyledDiv = styled.img`
    width: 1em;
    margin-left: 8px;
    margin-right: 8px;
`

const Button = ({onClick}) =>{
    return(
        <div>
            {/* <StyledDiv src={Paw} alt="paw print logo" width="20px"/> */}
            <button onClick={onClick}>New Doggo</button>
            {/* <StyledDiv src={Paw} alt="paw print logo" width="20px"/> */}
        </div>
    )
}

export default Button;