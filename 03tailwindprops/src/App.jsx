// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {

  // let myObj = {
  //   username: "Subham",
  //   age: "21"
  // }

  // let arr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card channel="chaiaurcode" someObj = {myObj} somearr = {arr}/> */}
      <Card username = "shubham" btnText="visit me" />
      <Card username = "navya" />

    </>
  )
}

export default App
