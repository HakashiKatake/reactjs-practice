import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: "Yoo",
    age: 20,
  }
  

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">Tailwind test</h1>
    
      {/* <Card channel="yoo" someObje={myObj} /> */}
      <Card username='yoo' description='hi' btnText='hello'/>
      <Card username='tst' description='hi2' />
    </>
  )
}

export default App
