import {useContext} from "react";
import LessonContext from "@/contexts/LessonContext.ts";

export function LessonVideo() {
  const lesson = useContext(LessonContext)
  if (lesson === null) {
    throw new Error("Created <LessonVideo> with null 'lesson'")
  }

  return (
    <video className="lesson__video" src={lesson.video} controls></video>
  )
}
