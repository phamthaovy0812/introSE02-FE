import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import SignUp from "../pages/signUp/signUp";
import Ranking from "../pages/ranking/ranking";

import LogIn from "../pages/logIn/logIn";
import Error from "../pages/error/error";

import Search from "../pages/search/search"
import Profile from "../pages/profile/profile"
import Newfeed from "../pages/newfeed/newfeed"
import FullPost from "../pages/fullpost/fullpost"


const mainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Ranking" element={<Ranking />} />

          <Route path="Error" element={<Error />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Search" element={<Search/>} />
          <Route path="Profile" element={<Profile/>} />
          <Route path="Newfeed" element={<Newfeed />} />
          <Route path="FullPost" element={<FullPost/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default mainRoutes;
