import "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/posts";
import { useEffect, useState } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import useStyles from "./styles";
import memories from './images/memories_camera.png'


function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <h1>Hello</h1>

      <div>{JSON.stringify(posts)}</div>
    </div>
  );
}

export default App;
