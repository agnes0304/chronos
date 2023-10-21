import { FC } from "react";
import Post from "./Post";

// TODO: Props로 post data 받기
// TODO: post data -> Post mapping

const PostList: FC = () => {
  return (
    <div className="w-[90vw]"> 
      <Post />
    </div>
  );
};

export default PostList;
