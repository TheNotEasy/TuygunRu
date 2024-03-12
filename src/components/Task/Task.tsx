import './Task.scss'

import more from '@/assets/more.svg'

export type TaskProps = {
  name: string,
  count: number,
  countFinished: number,
  date: Date
}

export function Task({name, count, countFinished, date}: TaskProps) {
  return (
    <div className="task">
      <div className="task__floor task__upper">
        <p className="task__name">{name}</p>
        <img src={more} alt="more" />
      </div>
      <div className="task__floor task__footer">
        <div className="task__counts">
          <div className="task__count">{count}</div>
          <div className="task__count finished">{countFinished}</div>
        </div>
        <p className="task__date">{date.toLocaleString('en-GB')}</p>
      </div>
    </div>
  )
}
