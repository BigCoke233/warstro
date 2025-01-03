import Icon from "./Icon"

export default function ActionDisplay(props) {
  const G = props.G
  const {x, y} = G.last.combination
  const sign = G.signSequence[x-1]
  const planet = G.planetSequence[y-1]
  return (
    <div id="warstro-action-display">
      <Icon name={sign} />
      <Icon name={planet} />
    </div>
  )
}
