import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username:"Rohit",
    age: 22
  }

  return (
    <>
<h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
<Card name="Rohit Varfa"  myobj = {obj}/>
<Card name="Sandeep Dangi"  btnText="visit me"/>
<Card name="Gaurav Sisodiya"  btnText="are kya yaar"/>

    </>
  )
}

export default App
