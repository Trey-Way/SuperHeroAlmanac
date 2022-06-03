import React from 'react';
import { useState } from "react";


export default function ApiDisplay(props) {
   const  apiKey = "307839564858505"
  //   let apiCount = apiCount + 1
  //   console.log("Key was used " + apiCount + "times")
  //   return
  //   "307839564858505";
  //  }
    const [heroSearch, setHeroSearch] = useState("")
    const [MData, setMData] = useState(null)
    const [selectedHero, setSelectedHero] = useState(``)
    const [ErrorMessage, setErrorMessage] = useState('')

    const updateHeroSearch = (event) => {

        setHeroSearch(event.target.value)
        console.log(event.target.value)

    }


    // const SearchResults = () => {
    //   if (MData !== null)
    //     return (
    //       <div className='dataResult'>
    //       {MData.map((value, key) => {
    //         return <div>{value.results.length}</div>
    //       })}

    //     </div> 
    //     )
    //   }
    

    const heroHandle = (event) => {
        event.preventDefault()
        fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${heroSearch}`)
        .then(response => response.json()) 
         .then(data => {
          console.log(data)
          setHeroSearch(``)

        if (data.response === "error" ) {
          console.log("lol nah it didnt work")
          setErrorMessage(data.response)
        } else {
          setErrorMessage(null)
          setMData(data)
          setSelectedHero(data)
          // Tells if it worked or not
          console.log("Woah it worked O.O")
          // Where I put the console.log 
          console.log(MData)
          // console.log(MData.results[0])
        }

        })
    }
    
    let ErrorDisplay = ''
    if (ErrorMessage === "error") {
      console.log()
      ErrorDisplay = (
      <div>
        <h2 className='ErrorDisplay'>Nah it didn't work bud... try again</h2>
      </div>
      )
    }


    let colorChange = '';
    let heroDisplay = '';
    if (MData !== null){
      let HAlignment = MData.results[0].biography.alignment;
      if (HAlignment === "good"){
        colorChange = 'green'
      } else if (HAlignment === "bad"){
        colorChange = "red"
      }
      heroDisplay = (
        <div className='heroDisplay'>
          <img src={MData.results[0].image.url} alt="SuperHero"/>
          <div>Lives in {MData.results[0].work.base}</div>
          <div >Name: {MData.results[0].name}</div>
          <div>Weight: {MData.results[0].appearance.weight[0]}</div>
          <div>Species: {MData.results[0].appearance.race}</div>
          <div className='Alignment' style={{color: colorChange}}>Alignment: {HAlignment}</div>
          <button onClick={() => props.addHeroToList(MData.results[0])}>Add to List!</button>
        </div>
      )
    }

    

  return (
    <div className='ApiDisplay'>
        <section>
        <div></div>
        <form onSubmit={heroHandle}>
            <input id='searchBar' onChange={updateHeroSearch} value={heroSearch} type="text" placeholder="Type in your Hero!"/>
            {/* <SearchResults /> */}
        </form>
        {ErrorDisplay}
        {heroDisplay}
        </section>
        <section>
        <div></div>
        </section>
    </div>

  )
}
