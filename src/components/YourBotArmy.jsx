import BotCard from "./BotCard"

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  if (bots.length === 0) return null

  return (
    <div className="my-8 p-4 bg-botarmy/10 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Bot Army</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            inArmy={true}
            onRelease={onRelease}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  )
}

export default YourBotArmy