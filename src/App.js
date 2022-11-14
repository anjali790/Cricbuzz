import { BrowserRouter , Routes , Route } from "react-router-dom"

import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import  { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext"

import  "./components/style/dark.css"


function App() {

const { darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app "}>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
