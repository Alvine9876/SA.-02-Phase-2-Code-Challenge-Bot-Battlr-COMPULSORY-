import { useState, useEffect } from 'react'
import BotCollection from './components/BotColection'
import YourBotArmy from './components/YourBotArmy'
import './App.css'

function App() {
  const [bots, setBots] = useState([])
  const [yourArmy, setYourArmy] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => {
        setBots(data)
        setLoading(false)
      })
  }, [])

  const enlistBot = (bot) => {
    if (!yourArmy.some(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot])
    }
  }

  const releaseBot = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id))
  }

  const dischargeBot = async (bot) => {
    try {
      await fetch(`http://localhost:8001/bots/${bot.id}`, {
        method: 'DELETE'
      })
      setYourArmy(yourArmy.filter(b => b.id !== bot.id))
      setBots(bots.filter(b => b.id !== bot.id))
    } catch (error) {
      console.error('Error discharging bot:', error)
    }
  }

  if (loading) return <div className="text-center mt-8">Loading bots...</div>


  return (
    <>
 <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-botblue">Bot Battlr</h1>
      
      <YourBotArmy 
        bots={yourArmy} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot} 
      />
      
      <BotCollection 
        bots={bots} 
        onEnlist={enlistBot} 
      />
    </div>
    </>
  )
}

export default App
