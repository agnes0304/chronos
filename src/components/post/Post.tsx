import { FC } from "react";
import Actions from "./Actions";

import summary from "../../assets/summary.webp";

// TODO: post link, Actions로 넘기기

const Post: FC = () => {
  return (
    <div className="flex w-full h-[120px] border rounded border-gray-300 p-1 px-2">
      <img src={summary} />
      {/* TODO: img hover -> 돋보기 / onClick -> 모달 open/ 확대 */}
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
