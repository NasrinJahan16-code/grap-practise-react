import LineChart from "./Components/LineChart/LineChart"
import Navbar from "./Components/NavBar/Navbar"
import PriceOption from "./Components/PriceOption/PriceOption"

// import Dnav from './Components/DaisyNav/DNav'
function App() {

  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-7xl'></h1>
      {/* <Dnav></Dnav> */}
      <PriceOption></PriceOption>
    <LineChart></LineChart>
      

      
      
    </>
  )
}

export default App
