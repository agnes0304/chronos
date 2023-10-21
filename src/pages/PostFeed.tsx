import { FC, useState } from "react";
import Browse from "../components/search/Browse";
import PostList from "../components/post/PostList";
import Nopost from "../components/post/Nopost";

// TODO: 검색 -> fetch post data -> PostList로 넘기기

const PostFeed: FC = () => {
  const [isPosts, setIsPosts] = useState(false);

  return (
    <div className="flex h-[100vh] pt-[52px] flex-col items-start">
      <Browse />
      <h1 className="text-gray-400 my-2">PostList</h1>
      {isPosts ? <PostList />: <Nopost />}
    </div>
  );
};

export default PostFeed;
