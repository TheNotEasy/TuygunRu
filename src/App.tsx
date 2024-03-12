import './App.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "@/pages/Auth/Auth.tsx";
import {SignUp} from "@/pages/SignUp/SignUp.tsx";
import {Header} from "@/components/Header/Header.tsx";
import {Classroom} from "@/pages/Classroom/Classroom.tsx";
import {LessonPicker} from "@/pages/LessonPicker/LessonPicker.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/auth"} />} />
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/classroom" element={<Classroom />}></Route>
        <Route path="/lesson-picker" element={<LessonPicker />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
