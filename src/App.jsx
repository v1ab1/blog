import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Setup } from "./components/Setup";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Header />
      <Setup />
      {/* <Login /> */}
      {/* <Home /> */}
    </>
  );
}