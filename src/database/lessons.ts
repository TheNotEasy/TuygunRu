import lesson1 from "@/assets/lesson1.jpeg"
import lesson1about from "@/assets/lesson1about.png"
import lesson1video from "@/assets/lesson1video.mp4"

import lesson2 from "@/assets/lesson2.jpeg"
import lesson3 from "@/assets/lesson3.jpeg"
import lesson4 from "@/assets/lesson4.jpeg"
import lesson5 from "@/assets/lesson5.jpeg"
import lesson6 from "@/assets/lesson6.jpeg"

export interface Lesson {
  name: string,
  image: string,
  video: string,
  about: string,
  fake?: boolean,
}

function getFakeLesson(name: string, photo: string): Lesson {
  return {
    "name": name,
    "image": photo,
    "video": lesson1video,
    "about": lesson1about,
    "fake": true
  }
}

export default {
  "lesson1": {
    "name": "Аат тыл",
    "image": lesson1,
    "video": lesson1video,
    "about": lesson1about,
  } as Lesson,
  "lesson2": getFakeLesson("Туһулуу. Сирэй сана", lesson2),
  "lesson3": getFakeLesson("Алпаабыт", lesson3),
  "lesson4": getFakeLesson("Аhа5ас дор5ооннору наардааhын", lesson4),
  "lesson5": getFakeLesson("Бутэй дор5ооннор", lesson5),
  "lesson6": getFakeLesson("Тиэкис тутула", lesson6)
}
