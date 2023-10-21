import { FC, useState } from "react";
import Browse from "../components/search/Browse";
import PostList from "../components/post/PostList";
import Nopost from "../components/post/Nopost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

// TODO: 검색 -> fetch post data -> PostList로 넘기기

const PostFeed: FC = () => {
  const [isPosts, setIsPosts] = useState(true);

  return (
    <div className="flex h-[100vh] pt-[52px] flex-col items-start">
      <Browse />
      <div className="flex justify-center items-baseline">
        <div className="text-gray-400 mr-1">
          <FontAwesomeIcon icon={faList} />
        </div>
        <h1 className="text-gray-400 my-2">PostList</h1>
      </div>
      {isPosts ? <PostList /> : <Nopost />}
    </div>
  );
};

export default PostFeed;
