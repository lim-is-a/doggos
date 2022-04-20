import { useState } from 'react'
import Title from './components/Title'
import ImageContainer from './components/ImageContainer'
import Button from './components/Button'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const getBreed = (dogUrl) =>{
  let arr = dogUrl.split("/")
  console.log(arr)
  let breed = arr[4];
  // console.log(breed)
  if (breed.includes("-")){
    let splitBreedArr = breed.split("-");
    console.log(splitBreedArr)
    let reverseArr = splitBreedArr.reverse().join(" ");
    console.log(reverseArr)
    return(reverseArr);
  }
  return(breed)
}

function App() {
  
  const [url, setUrl] = useState("https://www.pupvine.com/wp-content/uploads/2021/08/Black-Belgian-Malinois.jpeg")
  const [breed, setBreed] = useState("Black Belgian Malinois")

  const handleclick = () => {
    // console.log("new doggie loading!");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((res) => {
      setUrl(res.message); 
      setBreed(getBreed(res.message))
      // console.log(res.message)
    })
    .catch((err) => console.error(err))
  }

  return (
    <MainContainer>
       <Title name="Doggo"/> 
       <ImageContainer url={url} breed={breed}/>
       <Button onClick={handleclick}/>
    </MainContainer>
  );
}

export default App;
