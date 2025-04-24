import BotCard from "./BotCard"

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Available Bots</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onEnlist={onEnlist} 
          />
        ))}
      </div>
    </div>
  )
}

export default BotCollection