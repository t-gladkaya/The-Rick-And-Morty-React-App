
import { HomePage } from "./pages/HomePage/homepage"
import { Header } from "./common/components/Header"
import { CharacterPage } from "./pages/CharacterPage/CharacterPage"
import { Character } from "./pages/CharacterPage/Character/Character"
import { LocationPage } from "./pages/LocationPage/LocationPage"
import { EpisodePage } from "./pages/EpisodePage/EpisodePage"
import { Route, Routes } from "react-router"
function App() {
  return (
     <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
      </Routes>
    </div>
  )
}
 
export default App
