import ImageContainer from "./ImageContainer";
import styled from "styled-components";

const DogsListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding-bottom: 60px
    // justify-content: center;
`

const DogsListContainer = ({urls, breed}) => {
    return (
        <DogsListDiv>
            {
                urls.map((url, i) =>{
                    return(<ImageContainer key={i} url={url} breed={breed[i]}/>)
                })
            }
            {/* {console.log(urls)} */}
        </DogsListDiv>
    );
}
export default DogsListContainer;