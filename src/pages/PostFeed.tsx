import { FC } from "react";
import Browse from "../components/search/Browse";
import PostList from "../components/post/PostList";

const PostFeed: FC = () => {
  return (
    <div className="flex h-[100vh] pt-[52px] flex-col items-start">
      <Browse />
      <h1 className="text-gray-400 my-2">PostLists</h1>
      <PostList />
    </div>
  );
};

export default PostFeed;
