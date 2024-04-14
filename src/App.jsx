import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Team from '../components/Team'
import './App.css'
import Hero from '../components/Hero'
import StudyJams from '../components/Event_Workshops/StudyJams/StudyJams'
import AIML from '../components/Event_Workshops/AIML/AIML'
import Android from '../components/Event_Workshops/Android/Android'
import EventAndWorkshop from '../components/EventAndWorkshop'


function App() {


  return (
   <>
     <NavBar/>
     <Routes>
        <Route exact index path='' element={<Hero/>}></Route>
        <Route exact path='/team' element={<Team/>}></Route>              
        <Route exact path='/study_jams' element={<StudyJams/>}></Route> 
        <Route exact path='/aiml' element={<AIML/>}></Route> 
        <Route exact path='/android' element={<Android/>}></Route> 
        <Route exact path='/eventandworkshops' element={<EventAndWorkshop/>}></Route> 
     </Routes>
     <Footer/>
   </>
  )
}

export default App
