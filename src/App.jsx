import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Team from '../components/Team'
import './App.css'

function App() {


  return (
   <>
    <NavBar/>
     <Routes>
     <Route exact path='/' ></Route>
     <Route exact path='/team' element={<Team/>}></Route>
     </Routes>
   </>
  )
}

export default App
