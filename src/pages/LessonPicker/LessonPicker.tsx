import {LessonCard} from "@/components/LessonCard/LessonCard.tsx";

import './LessonPicker.scss'
import lessons from "@/database/lessons.ts";

export function LessonPicker() {
  return (
    <>
      <div className="container container-gap picker">
        <h1 className="picker__title">Уроки</h1>
        <div className="picker__lessons">
          {Object.entries(lessons).map(([id, lesson]) => {
            return <LessonCard {...lesson} id={id} />
          })}
        </div>
      </div>
    </>
  )
}
