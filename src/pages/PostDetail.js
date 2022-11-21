import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Provider";

function PostDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const postBilgileri = location.state.postBilgileri;
  const { setPosts, posts } = useContext(AppContext);

  const updatePost = () => {
    let newArr = posts;
    newArr.map((item) => {
      if (item.id == postBilgileri.id) {
        item.title = "Example Item for Title -- Güncellendi!!";
      }
    });
    setPosts(newArr);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-2">
          <div className="card">
            <h2 className="text-center">Post Detail</h2>

            <img className="img-fluid" src={postBilgileri.url} alt="" />
            <p className="m-4"> {postBilgileri.title} </p>
            <button className="btn btn-info  btn-block" onClick={updatePost}>
              Update
            </button>
            <button
              className="btn btn-warning  btn-block"
              onClick={() => navigate("/newPosts")}
            >
              Go Back!
            </button>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="card">
            <h2 className="text-center">Example</h2>

            <img className="img-fluid" src={postBilgileri.url} alt="" />
            <p className="m-4"> {postBilgileri.title} </p>
            <button className="btn btn-info  btn-block" onClick={updatePost}>
              Update
            </button>
            <button
              className="btn btn-warning  btn-block"
              onClick={() => navigate("/newPosts")}
            >
              Go Back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostDetail;
