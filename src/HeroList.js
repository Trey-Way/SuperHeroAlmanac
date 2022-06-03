import React from 'react';
import { useEffect, useState } from "react";
import App from './App';
import ApiDisplay from './ApiDisplay';

export default function HeroList(props) {
 console.log("props" + {props})
  // let HeroList = props.results[0].map((MData))







// const listDisplay = (
//   <div>
//     <h1></h1>
//   </div>
// )

console.log(props)


let listDisplay = props.hList.map((MData) => {
  console.log("listdata" + MData)
return (
<div>
 <h3>{MData.name}</h3>
 <img src={MData.image.url} />
</div>
);
});


console.log(listDisplay)

  return (
    <div className="HeroList">
      <h1>Saved Characters</h1>
      <div style={{display: 'flex'}}>{listDisplay}</div>
    </div>
  )
}
