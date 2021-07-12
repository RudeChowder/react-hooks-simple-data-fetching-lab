import React, { useState, useEffect } from "react"

const App = () => {
  const [doggo, setDoggo] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(data => {
        setDoggo(data.message)
        setIsLoaded(true)
      })
  }, [])

  if (!isLoaded) { return <p>Loading...</p> }

  return <img src={doggo} alt="A Random Dog" />
}

export default App
