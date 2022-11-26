import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Layout } from "./components/layout/Layout";
import { UserLogin } from "./components/login/UserLogin";
import { EmailPasswordReset } from "./components/login/EmailPasswordReset"
import { ResetPassword } from "./components/login/ResetPassword"
import { Registration } from "./components/login/Registration"


function App() {

  const [mode, setMode] = useState("light");

  let Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Layout mode={mode}
                setMode={setMode} />} />
              <Route path="UserLogin" element={<UserLogin />} />
              <Route path="Registration" element={<Registration />} />
              <Route path="EmailPasswordReset" element={<EmailPasswordReset />} />
              <Route path="ResetPassword" element={<ResetPassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
