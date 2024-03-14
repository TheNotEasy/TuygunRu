import {useContext} from "react";
import LessonContext from "@/contexts/LessonContext.ts";

export function CreativeWork() {
  const lesson = useContext(LessonContext)
  if (lesson === null) {
    throw new Error("LessonContext is null")
  }

  return (
    <img src={lesson.about}></img>
  )
}
