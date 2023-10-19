import { FC } from "react";
import Browse from "../components/search/Browse";
import PostList from "../components/post/PostList";

const PostFeed: FC = () => {
  return (
    <>
      <Browse />
      <h1>PostLists here!</h1>
      <PostList />
    </>
  );
};

export default PostFeed;
