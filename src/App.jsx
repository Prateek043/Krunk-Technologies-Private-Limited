import { useState } from 'react'
import LandingPage from '../src/Pages/LandingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#E6EEFF] w-full min-h-screen flex items-center justify-center'> 
      <LandingPage/>
    </div>
  )
}

export default App
