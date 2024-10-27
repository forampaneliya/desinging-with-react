import Header from "./Pages/Header/Header"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Rooms from "./Pages/Rooms/Rooms"
import Group from "./Pages/Groups/Group"
import Meeting from "./Pages/Meeting/Meeting"
import Dining from "./Pages/Dining/Dining"
import About from "./Pages/About/About"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/groups" element={<Group/>}/>
      <Route path="/meeting" element={<Meeting/>}/>
      <Route path="/dining" element={<Dining/>}/>
      <Route path="/about" element={<About/>} />
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
