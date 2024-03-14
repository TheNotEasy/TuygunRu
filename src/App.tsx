import './App.scss'
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "@/pages/Auth/Auth.tsx";
import {SignUp} from "@/pages/SignUp/SignUp.tsx";
import {Header} from "@/components/Header/Header.tsx";
import {Classroom} from "@/pages/Classroom/Classroom.tsx";
import {LessonPicker} from "@/pages/LessonPicker/LessonPicker.tsx";
import {Lesson} from "@/pages/Lesson/Lesson.tsx";
import {LessonVideo} from "@/components/LessonVideo/LessonVideo.tsx";
import {CreativeWork} from "@/components/CreativeWork/CreativeWork.tsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/auth"} />} />
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/classroom" element={<Classroom />}></Route>
        <Route path="/lesson-picker" element={<LessonPicker />}></Route>
        <Route path="/lesson/:id" element={<Lesson />}>
          <Route path="video" element={<LessonVideo />} />
          <Route path="about" element={<CreativeWork />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
