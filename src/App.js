import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";

function App() {
  return (
    <div className="App">
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
