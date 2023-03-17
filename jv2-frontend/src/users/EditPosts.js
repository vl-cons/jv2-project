import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPost() {

  let navigate = useNavigate();
  const {id}=useParams();

  const [post, setPosts] = useState({
    title: "",
    author: "",
    url: "",
    topics: "",
    year: 0
  });

  const { author, title, url, topics, year } = post;

  const onInputChange = (e) => {
    setPosts({ ...post, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPost()
  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/post/${id}`, post);
    navigate("/");
  };

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/post/${id}`)
    setPosts(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter a Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Author
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Name"
                name ="author"
                value={author}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                URL
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter a URL"
                name="url"
                value={url}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Topics
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter some Topics"
                name="topics"
                value={topics}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Year
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter a Year"
                name="year"
                value={year}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}