import {Outlet, useLocation, useNavigate, useParams} from "react-router";

import lessons from "@/database/lessons.ts";
import {Link, Navigate} from "react-router-dom";
import LessonContext from "@/contexts/LessonContext.ts";

import './Lesson.scss'
import {useEffect} from "react";

export function Lesson() {
  const { id } = useParams<{id: keyof typeof lessons}>()
  const navigate = useNavigate()
  const {pathname} = useLocation()

  useEffect(() => {
    const struct = pathname.split('/')
    if (!(struct[struct.length-1] in ['video', 'about'])) {
      navigate("video")
    }
  }, [])

  if (id === undefined) {
    return <Navigate to="/lesson-picker" />
  }

  const lesson = lessons[id]


  return (
    <>
      <div className="container container-gap">
        <h1 className="lesson__title">{lesson.name}</h1>
        <div className="lesson__tabs">
          <Link to="video">Саҥаны үөрэтии</Link>
          <Link to="about">Айар үлэ</Link>
          {/*<Link to="video">Бэрэбиэркэлээ бэйэҕин</Link>*/}
          {/*<Link to="video">Кылгастык</Link>*/}
        </div>
        <div className="lesson__content">
          <LessonContext.Provider value={lesson}>
            <Outlet></Outlet>
          </LessonContext.Provider>
        </div>
      </div>
    </>
  )
}
