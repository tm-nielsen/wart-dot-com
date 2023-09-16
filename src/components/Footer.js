import React from 'react'
import "../styles/footer.css"

import clubIcon from "../assets/TransparentClubIcon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex-row">
        <h3 className="acc">
          WArt is a University of Calgary<br/>
          Game Design Club activity
        </h3>
        <a href="https://linktr.ee/gamedesignclub" target = "_blank"
            className="link shadow" id="club-link">
          <img src={clubIcon} alt="Discord Icon" id="club-icon"/>
        </a>
      </div>

      <ol className="flex-row flat">
        <a href="https://discord.gg/XKU6wHnCYD" target = "_blank"
            className="link shadow">
          Discord
        </a>
        <a href="https://www.instagram.com/uofcgamedesign/" target = "_blank"
            className="link shadow">
          Instagram
        </a>
        <a href="https://uofcgamedesignclub.itch.io/" target = "_blank"
            className="link shadow">
          Itch.io
        </a>
      </ol>
    </div>
  )
}

export default Footer
