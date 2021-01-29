import React from 'react'
import { Link } from "react-router-dom"

interface Props {

}

const Header = (props: Props) => {
  return (
    <header className="header">
      <Link to="/" className="brand">
        RuDe <span className="brand-app-name">CybersecurityTinder</span>
      </Link>
    </header>
  )
}

export default Header;