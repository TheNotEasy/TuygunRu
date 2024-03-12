import {LessonCard} from "@/components/LessonCard/LessonCard.tsx";

import test from "@/assets/mascot.webp";

import './LessonPicker.scss'

export function LessonPicker() {
  return (
    <>
      <div className="container container-gap picker">
        <h1 className="picker__title">Уроки</h1>
        <div className="picker__lessons">
          <LessonCard name={"Название урока"} img={test}></LessonCard>
          <LessonCard name={"Название урока"} img={test}></LessonCard>
          <LessonCard name={"Название урока"} img={test}></LessonCard>
          <LessonCard name={"Название урока"} img={test}></LessonCard>
          <LessonCard name={"Название урока"} img={test}></LessonCard>
        </div>
      </div>
    </>
  )
}
