import React from "react";

function YourBotArmy({ bots, onRelease, onDischarge }) {
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <div className="ui cards">
            {bots.map((bot) => (
              <div key={bot.id} className="ui card">
                <div className="image">
                  <img alt="oh no!" src={bot.avatar_url} />
                </div>
                <div className="content">
                  <div className="header">{bot.name}</div>
                  <div className="meta text-wrap">
                    <small>{bot.catchphrase}</small>
                  </div>
                </div>
                <div className="extra content">
                  <span>
                    <i className="icon heartbeat" />
                    {bot.health}
                  </span>
                  <span>
                    <i className="icon lightning" />
                    {bot.damage}
                  </span>
                  <span>
                    <i className="icon shield" />
                    {bot.armor}
                  </span>
                  <div className="ui buttons">
                    <button
                      className="ui red button"
                      onClick={() => onDischarge(bot.id)}
                    >
                      x
                    </button>
                    <button
                      className="ui green button"
                      onClick={() => onRelease(bot)}
                    >
                      Release
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
