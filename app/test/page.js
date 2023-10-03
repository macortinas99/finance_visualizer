// pages/cable-tray-2d.js
import CableTray2D from "../components/CableTray"

export default function CableTray2DPage() {
  return (
    <div>
      <CableTray2D width={36} height={6} tiers={5} rotation={40} />
    </div>
  )
}
