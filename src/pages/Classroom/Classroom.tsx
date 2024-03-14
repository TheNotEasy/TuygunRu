import {Task} from "@/components/Task/Task.tsx";

import './Classroom.scss'

export function Classroom() {
  return (
    <>
      <div className="container container-gap">
        <p>Заданные уроки</p>
        <div className="lessons-list">
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
          <Task name="<name>" count={12} countFinished={6} date={new Date(1e9)}></Task>
        </div>
      </div>
    </>
  )
}
