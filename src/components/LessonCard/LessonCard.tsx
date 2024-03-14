import './LessonCard.scss'
import {useNavigate} from "react-router";

export type LessonCardProps = {
  image: string
  name: string
  id: string
  fake?: boolean
}

export function LessonCard({image, name, id, fake}: LessonCardProps) {
  const navigate = useNavigate();

  return <div className="lesson-card" onClick={() => !fake ? navigate(`/lesson/${id}/video`) : undefined}>
    <img className="lesson__image" src={image} alt="" draggable={false} />

    <p className="lesson__name">{name}</p>
  </div>
}
