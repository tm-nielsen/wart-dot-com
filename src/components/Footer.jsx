import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <ol className="flex-row flat">
        <a href="https://discord.gg/cGMxVy4r8Z" target = "_blank"
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
      <div className="flex-row footer-text-area">
        <p className='footer-text'>
          This is a Twig type website, please hire me.
        </p>
        <a className='footer-text' href="https://github.com/tm-nielsen" target="_blank">Github</a>
        <a className='footer-text' href="https://klungore.itch.io/" target="_blank">Itch.io</a>
        <a className='footer-text' href="mailto: tmnielsen33@gmail.com">Email</a>
      </div>
    </div>
  )
}

export default Footer
