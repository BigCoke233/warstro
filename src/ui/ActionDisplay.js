import Dice from "./components/Dice"

export default function ActionDisplay(props) {
  const G = props.G
  const {x, y} = G.last.combination
  return (
    <div id="warstro-action-display">
      <div id="warstro-dice">
        <Dice data={{ G: G, type: "sign", index: x }} />
        <Dice data={{ G: G, type: "plaent", index: y }} />
      </div>
    </div>
  )
}
