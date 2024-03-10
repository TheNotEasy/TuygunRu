import './App.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "@/pages/Auth/Auth.tsx";
import {SignUp} from "@/pages/SignUp/SignUp.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/auth"} />} />
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/signin" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
