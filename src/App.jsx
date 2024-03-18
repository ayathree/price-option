

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Priceoption from './components/Priceoption/Priceoption'
import Linechart from './components/Linechart/Linechart'
// import Daisynav from './components/Daisyav/Daisynav'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    {/* <Daisynav></Daisynav> */}
      
      <h1 className='bg-rose-500'>Vite + React</h1>
      <Priceoption></Priceoption>
      
      <Linechart></Linechart>
     
      
    </>
  )
}

export default App
