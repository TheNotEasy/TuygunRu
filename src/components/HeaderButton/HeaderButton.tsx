import "./HeaderButton.scss"
import {Link} from "react-router-dom";

export function HeaderButton({text, icon, onlyOne, link}: {text: string, icon?: string, onlyOne?: boolean, link: string}) {
  return (
    <Link className="header-button" to={link}>
      <span className="header-button__text">{text}</span>
      {icon && <img src={icon} alt="" className={onlyOne ? "header-button__image-hide" : ""} />}
    </Link>
  )
}
