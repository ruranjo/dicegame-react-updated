
import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => {
    setToggle((prev) => !prev);
  }

  return (
    <>
      <div className="App">
        {toggle ? <GamePlay/>: <StartGame toggle={handleChangeToggle} />}
      </div>
    </>
  )
}

export default App


/*
 */