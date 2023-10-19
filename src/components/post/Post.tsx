import { FC } from "react";
import Actions from "./Actions";

import summary from "../../assets/summary.webp";

const Post: FC = () => {
  return (
    <div className="flex w-full h-[120px] border rounded border-gray-300 p-1 px-2">
      <img src={summary} />
      <div className="flex flex-col justify-between gap-1 ml-2 mb-1">
        <h1 className="text-lg text-gray-400">title</h1>
        <p className="text-sm text-gray-400 overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla orci sed arcu lacinia egestas.
        </p>
        <Actions />
      </div>
    </div>
  );
};

export default Post;
