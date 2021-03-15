import "./App.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/posts";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button color="primary" variant="contained">
        I am a button
      </Button>
      <div>{JSON.stringify(posts)}</div>
    </div>
  );
}

export default App;
