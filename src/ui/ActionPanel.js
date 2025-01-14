import i18n from "../i18n/i18n"

export default function ActionPanel(props) {
  const { ctx, moves, G } = props.game
  return (
    <div id="warstro-action-panels">
      {
        [...Array(ctx.numPlayers)].map((_, i) => (
          <section key={i} className={`player-panel ${Number(ctx.currentPlayer)===i ? "active" : ""}`}>
            <h3>{i18n.t('player')} {i}{i18n.t("'s Panel")}</h3>
            <div className="player-panel-action">
              <button onClick={() => moves.descend()}>{i18n.t('action.descend')}</button>
              <button onClick={() => moves.summon()}>{i18n.t('action.summon')}</button>
            </div>
            <div className="player-panel-status">
              <p>
                {G.playerStatus[i].map(status =>
                  <span>{status.name} ({status.remaining})</span>
                )}
              </p>
            </div>
            <div className="player-panel-hands">
              {G.playerHands[i].map((card, i) =>
                <div>
                  <h4>{card.name}</h4>
                  <p><button onClick={() => moves.playCard(i)}>{i18n.t('action.play')}</button></p>
                </div>
              )}
            </div>
          </section>
        ))
      }
    </div>
  )
}
