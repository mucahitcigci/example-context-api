import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";

function Post() {
  //
  const { count, setCount, posts, setPosts } = useContext(AppContext);
  const navigate = useNavigate();

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos?_limit=15"
    );
    setPosts(data);
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <p className="text-center m-4">
        Hello,
        <br /> in this example;
        <br />
        Components structure,
        <br />
        Context api provider structure, <br />
        jsonplaceholder
        <br />
        Router, Axios...
        <br /> We used structures like
      </p>
      <button
        className="btn btn-outline-info"
        onClick={() => navigate("/newPosts")}
      >
        Get Started It's Example
      </button>
    </div>
  );
}
export default Post;
