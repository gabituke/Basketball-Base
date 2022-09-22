import { BrowserRouter, Routes, Route } from "react-router-dom"

import AllGames from './pages/AllGames.js'
import NewGame from './pages/NewGame.js'
import LiveScore from './pages/LiveScore.js'
import Header from './components/Header/Header.js'

import './App.css';

const App = () => {


  return (
    <BrowserRouter>
  <Header />
    
        <Routes>

                <Route path="/games/new" element={<NewGame />} />
                <Route path="/" element={<AllGames />} />
                <Route path="/scores/add/:gamesId" element={<LiveScore />} />

        </Routes>
 
    </BrowserRouter>
  )
}

export default App;