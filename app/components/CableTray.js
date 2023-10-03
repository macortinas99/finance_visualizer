// components/CableTray2D.js
export default function CableTray2D({ width, height, tiers, rotation }) {
  const ppi = 10 // pixels per inch
  const pixelWidth = width * ppi
  const pixelHeight = height * ppi
  const tierHeight = pixelHeight / tiers

  const rungs = Array.from({ length: tiers }, (_, i) => <rect key={i} x="0" y={i * tierHeight} width={pixelWidth} height={tierHeight} fill="none" stroke="black" strokeWidth="2" />)

  return (
    <svg width={pixelWidth} height={pixelHeight} style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center" }}>
      {rungs}
    </svg>
  )
}
