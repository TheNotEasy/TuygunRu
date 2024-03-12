import './LessonCard.scss'

export type LessonCardProps = {
  img: string
  name: string
}

export function LessonCard({img, name}: LessonCardProps) {
  return <div className="lesson-card">
    <img className="lesson__image" src={img} alt="" draggable={false} />

    <p className="lesson__name">{name}</p>
  </div>
}
