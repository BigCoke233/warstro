import Icon from "./Icon"

export default function BoardIndicators(props) {
  const G = props.G
  return (
    <>
      <div id="warstro-board-side">
        <div id="warstro-daylight-indicators" className="warstro-indicators">{
            G.planetSequence.map((item, index) => {
              return (
                <div className="warstro-indicator"
                  key={index}
                ><Icon name={index===G.movingCelestials.sun ? "sun" : (index===G.movingCelestials.moon ? "moon" : "")} /></div>
              )
            })
        }</div>
        <div id="warstro-planet-indicators" className="warstro-indicators">{
            G.planetSequence.map((item, index) =>
              <div className="warstro-indicator"
                key={index}
              >
                <Icon name={item} />
              </div>
            )
        }</div>
      </div>

      <div id="warstro-board-top">
          <div id="warstro-sign-indicators" className="warstro-indicators">{
          G.signSequence.map((item, index) =>
            <div className="warstro-indicator"
              key={index}
            ><Icon name={item} /></div>
          )
        }</div>
      </div>
    </>
  )
}
