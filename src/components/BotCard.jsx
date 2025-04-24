const BotCard = ({ bot, onEnlist, onRelease, onDischarge, inArmy = false }) => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={bot.avatar_url} 
          alt={bot.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{bot.name}</h3>
          <p className="text-gray-600 italic">"{bot.catchphrase}"</p>
          
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="bg-red-100 p-2 rounded text-center">
              <p className="font-bold">❤️ {bot.health}</p>
            </div>
            <div className="bg-yellow-100 p-2 rounded text-center">
              <p className="font-bold">⚔️ {bot.damage}</p>
            </div>
            <div className="bg-blue-100 p-2 rounded text-center">
              <p className="font-bold">🛡️ {bot.armor}</p>
            </div>
          </div>
          
          <p className="text-sm bg-gray-100 p-2 rounded">
            Class: <span className="font-medium">{bot.bot_class}</span>
          </p>
          
          {inArmy ? (
            <div className="mt-4 space-y-2">
              <button
                onClick={() => onRelease(bot)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-1 rounded"
              >
                Release
              </button>
              <button
                onClick={() => onDischarge(bot)}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded"
              >
                Discharge Forever
              </button>
            </div>
          ) : (
            <button
              onClick={() => onEnlist(bot)}
              className="w-full mt-4 bg-botblue hover:bg-blue-700 text-white py-2 rounded"
            >
              Enlist
            </button>
          )}
        </div>
      </div>
    )
  }
  
  export default BotCard