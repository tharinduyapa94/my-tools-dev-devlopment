import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Student'
import ListR from './List'
import Counter from './Counter'
import MyComponent from './Components/MyComponent'
import ColorPicker from './Components/ColorPicker'
import MyCar from './Components/MyCar'
function App() {
 
  const fruits=[{id:1,name:"apple",caleroies:6},
    {id:2,name:"orange",caleroies:80},
    {id:3,name:"banana",caleroies:90}];

  const vegitables=[{id:6,name:"potatoes",caleroies:110},
                     {id:7,name:"celeris",caleroies:200},
                     {id:8,name:"beans",caleroies:300}];              

  return (
    <>
     <Students name="sponge bob"/>
     {fruits.length>0 && <ListR items={fruits} category="Fruits"/>}
     {vegitables.length > 0 && <ListR items={vegitables} category="Vegitables"/>}

     <Counter/>
     <MyComponent/>
     <ColorPicker/>
     <MyCar/>
    </>
  )
}

export default App
