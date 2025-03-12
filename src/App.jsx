import { useEffect, useState } from 'react'
import Start from './components/Start'
import Game from './components/Game'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [userName, setUserName] = useState('')
  const [gameData, setGameData] = useState({})

  return (
    <div className='app-main'>

      {!isStarted && <Start userName={userName} setUserName={setUserName} setGameData={setGameData} setIsStarted={setIsStarted} />}

      {isStarted && gameData && <Game gameData={gameData} />}

    </div>
  )
}

export default App
