import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ranking from "./Ranking";
import TopBar from "./TopBar";
import { GlobalStyle } from "./GlobalStyles.js";
import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {

  const [userInfo, setUserInfo] = useState()

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <TopBar userInfo={userInfo} setUserInfo={setUserInfo} />
      <Routes>
        <Route path="/" element={<Ranking/>} />
        <Route path="/home" element={<Home userInfo={userInfo} setUserInfo={setUserInfo}/>} />
        <Route path="/login" element={<Login userInfo={userInfo} setUserInfo={setUserInfo}/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
