import { useState, useEffect, useContext } from "react";
import PostItem from "../components/PostItem";
import { AppContext } from "../context/Provider";

function NewPosts() {
  const { posts } = useContext(AppContext);
  return (
    <div className="container mt-4">
      <div className="row col-10">
        <div className="col-md4 mb-2">
          <div className="card">
            {posts.map((tekPostBilgi) => {
              return <PostItem key={tekPostBilgi.id} tekPost={tekPostBilgi} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewPosts;
