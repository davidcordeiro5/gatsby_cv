import React from 'react'

import "./Header.scss"

const Header = ({ title, subtitle }) => {
  return (
    <header className="header-page">
      <h2 className="header-title">{title}</h2>
      <h5 className="header-subtitle">{subtitle}</h5>
    </header>
  )
}

export default Header
