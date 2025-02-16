import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import DateDisplay from "~features/date-display"


export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="">
      <DateDisplay/>
    </div>
  )
}

export default PlasmoOverlay
