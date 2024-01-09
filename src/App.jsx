/* eslint-disable react/prop-types */
import { useState } from 'react'
import {FaScissors} from 'react-icons/fa6'
import {FaFile} from 'react-icons/fa6'
import {GiSilex} from 'react-icons/gi'
import { IconContext } from 'react-icons'
import './App.css'

function App()
{ 
    const gameAsset = {'roc':<GiSilex/>,'paper':<FaFile/>,'scissors':<FaScissors/>}
    const [round,setRound] = useState(0)
    const [computerScore,setComputerScore] = useState(0)
    const [playerScore,setPlayerScore] = useState(0)
    const [chrono,setChrono] = useState(0)
    const [buttonContent,setButtonContent] = useState(null)
   
    //fonctions permetant de reinitialiser le jeu
    function resetGame()
    {
        setRound(0)
        setComputerScore(0)
        setPlayerScore(0)
        
    }
    
    function handleChoice(e)
    {
       console.log(e)
    }
    return <div className='App'>
    <Header roundNumber={round} resetEvent={resetGame} bootEvent={()=>null}/>
    <Info computerScore={computerScore} playerScore={playerScore} timer={chrono}/>
    <Choices computerChoice={null} playerchoice={buttonContent}/>
    <IconContext.Provider value={{size:50}}>
    <Buttons roc={<GiSilex/>} paper={<FaFile/>} scissor={<FaScissors/>} clickEvent={handleChoice}/>
    </IconContext.Provider>
    
    <Notifcation/>
    </div> 
}

function Header({bootEvent,resetEvent,roundNumber})
{
    return <div className="header">
      <button onClick={bootEvent}>Start</button>
      <button onClick={resetEvent}>Reset</button>
      <p>Round: {roundNumber}</p>
    </div>
}

function Notifcation ({msg})
{
    return <div className='message'>
        <p>{msg}</p>
    </div>
}

function Info({computerScore,playerScore,timer})
{
    return <div className='info'>
        <p>COM: {computerScore}</p>
        <p>Player: {playerScore}</p>
        <p>timer: {timer}</p>
    </div>
}

function Choices({computerChoice,playerchoice})
{
    return <div className="choice-panel">
        <div className="computer-choice">
           {computerChoice}
        </div>
        <div className="player-choice">
           {playerchoice}
        </div>
    </div>
}
function Buttons({roc,paper,scissor,clickEvent})
{
    return <div className="buttons">
      <button onClick={clickEvent} className='button' id="roc">{roc}</button>
      <button onClick={clickEvent} className='button' id='paper'>{paper}</button>
      <button onClick={clickEvent} className='button' id='scissors'>{scissor}</button>
    </div>
}

export default App
