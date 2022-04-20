import ImageContainer from "./ImageContainer";
import styled from "styled-components";

const DogsListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    // justify-content: center;
`

const DogsListContainer = ({url, breed}) => {
    return (
        <DogsListDiv>
            <ImageContainer url={url} breed={breed}/>
            <ImageContainer url={url} breed={breed}/>
           <ImageContainer url={url} breed={breed}/>
           <ImageContainer url={url} breed={breed}/>
           <ImageContainer url={url} breed={breed}/>
           <ImageContainer url={url} breed={breed}/>
        </DogsListDiv>
    );
}
export default DogsListContainer;