import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import summary from "../../assets/summary.webp";

const Post: FC = () => {
  return (
    <div className="flex w-full h-[120px] border-[1px] border-gray-300 p-1 px-2">
      <img src={summary} />
      <div>
        <h1 className="text-lg text-gray-400">title</h1>
        <p className="text-sm text-gray-400">description</p>
        <div>
          <p className="text-sm text-gray-400">
            <FontAwesomeIcon icon={faDownload} />
          </p>
          <p className="text-sm text-gray-400">
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
