import { FC, useState } from "react";
import Actions from "./Actions";
import Modal from "../layout/Modal";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import summary from "../../assets/summary.webp";

// TODO: post link, Actions로 넘기기

const Post: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex w-full h-[120px] border rounded border-gray-300 p-1 px-2">
      <div className="relative w-auto h-full group shrink-0">
        <img
          className="w-full h-full overflow-hidden object-cover hover:opacity-30 transition-opacity duration-300"
          src={summary}
        />
        <div
          className="absolute text-2xl text-gray-400 pointer-events-none opacity-0 top-[35%] left-[42%] group-hover:opacity-100 transition-opacity duration-300"
          onClick={()=>openModal}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      {/* TODO: onClick -> 모달 open + 확대 */}
      <div className="flex flex-col justify-between gap-1 ml-2 mb-1">
        <h1 className="text-lg text-gray-400">title</h1>
        <p className="text-sm text-gray-400 overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla orci sed arcu lacinia egestas.
        </p>
        <Actions />
      </div>

      {/* 모달 */}
      {isModalOpen && <Modal image={summary} isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Post;
