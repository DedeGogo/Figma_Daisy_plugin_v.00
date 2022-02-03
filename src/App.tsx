import * as React from "react";
import LogInPage from "./pages/anonymous/LogInPage";
import MainPage from "./pages/authenticated/MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContextProvider, userContext } from "./providers/UserProvider";

const App = () => {
  // onload:
  // send msg to plugin, recover figma object => /login
  // pass object as props to SelectAccount
  // V.0 =>
  const { user } = React.useContext(userContext);
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to={user ? "/main" : "/login"} />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
