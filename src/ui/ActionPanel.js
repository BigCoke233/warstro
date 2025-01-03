export default function ActionPanel(props) {
  const { ctx, moves, G } = props.game
  return (
    <div id="warstro-action-panels">
      {
        [...Array(ctx.numPlayers)].map((_, i) => (
          <section key={i} className={`player-panel ${Number(ctx.currentPlayer)===i ? "active" : ""}`}>
            <h3>Player {i}'s Panel</h3>
            <div className="player-panel-action">
              <button onClick={() => moves.descend()}>Descend</button>
              <button onClick={() => moves.summon()}>Summon</button>
            </div>
            <div className="player-panel-status">
              <p>
                {G.playerStatus[i].map(status =>
                  <span>{status.name} ({status.remaining})</span>
                )}
              </p>
            </div>
            <div class="player-panel-hands">
              {G.playerHands[i].map((card, i) =>
                <div>
                  <h4>{card.name}</h4>
                  <p><button onClick={() => moves.playCard(i)}>play</button></p>
                </div>
              )}
            </div>
          </section>
        ))
      }
    </div>
  )
}
