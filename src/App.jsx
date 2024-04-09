import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Team from '../components/Team'
import './App.css'
import Hero from '../components/Hero'
import StudyJams from '../components/Event_Workshops/StudyJams/StudyJams'


function App() {


  return (
   <>
     <NavBar/>
     <Routes>
        <Route exact index path='' element={<Hero/>}></Route>
        <Route exact path='/team' element={<Team/>}></Route>              
        <Route exact path='/study_jams' element={<StudyJams/>}></Route> 
     </Routes>
     <Footer/>
   </>
  )
}

export default App
