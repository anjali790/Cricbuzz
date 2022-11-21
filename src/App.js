import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Login } from "./components/login/Login";
import { EmailPasswordReset } from "./components/login/EmailPasswordReset"
import { ResetPassword} from "./components/login/ResetPassword"


function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout />} />
          <Route path="login" element={<Login />} />
          <Route path="EmailPasswordReset" element={<EmailPasswordReset/>} />
           <Route path="ResetPassword" element={<ResetPassword/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
