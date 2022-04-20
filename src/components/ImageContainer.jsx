import styled from 'styled-components'

const ImageDiv = styled.div`
    margin: 2%;
    width: 28%;
`
const SizedImage = styled.img`
    width:100%;
    height:100%;
`
const ImageContainer = ({url, breed}) => {
    return (
        <ImageDiv>
            <SizedImage src={url} alt=""/>
            <p>This is a {breed}.</p>
        </ImageDiv>
    )
};
export default ImageContainer;