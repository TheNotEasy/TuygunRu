import {JSX} from "react";

import text from '@/assets/text.webp'
import mascot from '@/assets/mascot.webp'

import './Header.scss'
import {useLocation, useNavigate} from "react-router";
import classnames from "classnames";
import {HeaderButton} from "@/components/HeaderButton/HeaderButton.tsx";

import add from "@/assets/add.svg"
import logout from "@/assets/logout.svg"
import back from "@/assets/back.svg"

const LogoutButton = <HeaderButton text="Выйти" icon={logout} key="logout" link="/logout" onlyOne />
const CreateLessonButton = <HeaderButton text="Создать урок" icon={add} key="create-lesson" link="/lesson-picker" />
const BackToClassroomButton = <HeaderButton text="Назад" icon={back} link='/classroom' onlyOne />

const navigations: Record<string, JSX.Element[]> = {
  '/classroom': [
    CreateLessonButton,
    LogoutButton
  ],
  '/lesson-picker': [BackToClassroomButton, LogoutButton],
}

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const nav = navigations[pathname];

  const headerClassnames = classnames({
    container: true,
    header: true,
    "md-optional": nav === undefined || nav.length === 0
  })

  return (
    <header className={headerClassnames}>
      <img onClick={() => navigate("/")} src={text} alt="Туйгун Ру" className="header__logo-large" />
      <img onClick={() => navigate("/")} src={mascot} alt="" className="header__logo-mascot" />
      <nav className="header__nav">{nav}</nav>
    </header>
  )
}
