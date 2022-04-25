import { useState } from 'react'
import Title from './components/Title'
import Button from './components/Button'
import styled from 'styled-components'
import DogsListContainer from './components/DogsListContainer'

const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`

const getBreed = (dogUrl) =>{
  let arr = dogUrl.split("/")
  console.log(arr)
  let breed = arr[4];
  console.log(breed)
  if (breed.includes("-")){
    let splitBreedArr = breed.split("-");
    // console.log(splitBreedArr)
    let reverseArr = splitBreedArr.reverse().join(" ");
    // console.log(reverseArr)
    return(reverseArr);
  }
  return(breed)
}

const apiFunction = (setBreed, setUrls) => {
  // console.log("new doggie loading!");
  fetch('https://dog.ceo/api/breeds/image/random/3')
  .then((res) => res.json())
  .then((res) => {
    setUrls(res.message)
    console.log("this response: ", res.message)
    setBreed(res.message.map((url) => getBreed(url)))
  })
  .catch((err) => console.error(err))
}

function App() {

  const [urls, setUrls] = useState(["https://cdn.fotofits.com/petzlover/gallery/img/l/belgian-shepherd-dog-malinois-740243.jpeg", "https://www.pupvine.com/wp-content/uploads/2021/08/Black-Belgian-Malinois.jpeg", "https://i.pinimg.com/474x/01/ff/0e/01ff0e890bb2af8f2a3b6a4d0ceb35b8--black-belgian-malinois-belgium-malinois.jpg"])
  const [breed, setBreed] = useState(["Black Malinois Shepherd Puppy", "Black Belgian Malinois" , "Black Belgian Malinois"])

  const handleclick = () => {
    apiFunction(setBreed, setUrls)
  }

  return (
    <MainContainer>
       <Title name="Doggo"/> 
       <DogsListContainer urls={urls} breed={breed}/>
       <Button onClick={handleclick}/>
    </MainContainer>
  );
}

export default App;
