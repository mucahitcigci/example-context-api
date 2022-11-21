import React from "react";
import { useNavigate } from "react-router-dom";

function PostItem(props) {
  const navigate = useNavigate();
  const gonderi = props.tekPost;

  return (
    <div key={props.id}>
      <h2 className="text-center m-4">
        Name: <br />
        {gonderi.title}{" "}
      </h2>

      <button
        className="btn btn-success btn-lg btn-block mt-4 mb-4"
        onClick={() =>
          navigate("/postdetail", { state: { postBilgileri: gonderi } })
        }
      >
        Let's
      </button>
    </div>
  );
}
export default PostItem;
