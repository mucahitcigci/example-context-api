import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import NewPosts from "./pages/NewPosts";
import "./App.css";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/newPosts" element={<NewPosts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
