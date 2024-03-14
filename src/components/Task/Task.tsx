import './Task.scss'
import {useRef, useState} from "react";
import classnames from "classnames";

export type TaskProps = {
  name: string,
  count: number,
  countFinished: number,
  date: Date
}

export function Task({name, count, countFinished, date}: TaskProps) {
  const [menuTriggered, setMenuTriggered] = useState(false);
  let menuHovered = false;

  const moreRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="task">
      <div className="task__floor task__upper">
        <p className="task__name">{name}</p>
        <div
          ref={(ref) => {moreRef.current = ref}}
          className="task__more" tabIndex={0}  // tabIndex for "onBlur" able
          onClick={() => setMenuTriggered(!menuTriggered)}
          onBlur={() => {
            // Don't close menu when menu is being using, but focus again for onBlur again
            if (menuHovered) {
              moreRef.current?.focus()
              return
            }
           setMenuTriggered(false)
          }} />  {/* Wrapping in setTimeout to give time for menu actions */}
      </div>
      <div className="task__floor task__footer">
        <div className="task__counts">
          <div className="task__count">{count}</div>
          <div className="task__count finished">{countFinished}</div>
        </div>
        <p className="task__date">{date.toLocaleString('en-GB')}</p>
      </div>
      <div
        className={classnames({"task__menu": true, "toggled": menuTriggered})}
        onPointerEnter={() => {menuHovered = true}}
        onPointerLeave={() => {menuHovered = false}}>
          <button className="task__menu-btn" onClick={() => {
            console.log("delete")
            setMenuTriggered(false)
          }}>Удалить</button>
      </div>
    </div>
  )
}
