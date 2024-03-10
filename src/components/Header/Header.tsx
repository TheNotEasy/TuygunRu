import {JSX} from "react";

import text from '@/assets/text.webp'
import mascot from '@/assets/mascot.webp'

import './Header.scss'
import {useNavigate} from "react-router";

export function Header({ nav }: { nav: JSX.Element[] }) {
  const navigate = useNavigate()

  return (
    <header className="container header">
      <img onClick={() => navigate("/")} src={text} alt="Туйгун Ру" className="header__logo-large" />
      <img onClick={() => navigate("/")} src={mascot} alt="" className="header__logo-mascot" />
      <nav className="header__nav">{nav}</nav>
    </header>
  )
}
