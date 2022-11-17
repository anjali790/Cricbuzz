import { BrowserRouter , Routes , Route } from "react-router-dom"

import { Layout } from "./components/layout/Layout";
import { Login } from "./components/login/Login";
// import  { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext"

// import  "./components/style/dark.css"

function App() {

// const { darkMode} = useContext(DarkModeContext)
  return (
    // <div className={darkMode ? "app dark" : "app "}>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Layout />}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
