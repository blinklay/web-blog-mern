import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login";
import SinglePost from "./pages/SinglePost/SinglePost";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { server } from "./bff/server";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserAuth = server.checkAuth();

    if (isUserAuth) {
      fetch(
        `http://localhost:3000/users/${JSON.parse(
          localStorage.getItem("userId")
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SET_USER", payload: data });
        });
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post-create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
