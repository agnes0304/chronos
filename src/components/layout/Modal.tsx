import { FC } from "react";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="absolute top-0 left-0 h-[100vh] w-[100vw] bg-black/50 z-10"
        onClick={()=>onClose}
      ></div>
      <div className="z-20 absolute flex justify-center items-center bg-white rounded w-[90vw] overflow-hidden top-[30%] left-[5%] sm:top-[25%] md:top-[15%] md:w-[80vw] md:left-[10%] lg:w-[60vw] lg:top-[10%] lg:left-[20%]">
        <div
          className="absolute right-[5px] top-0 hover:text-indigo-300 active:shadow-inner active:text-indigo-500"
          onClick={()=>onClose}
        >
          <FontAwesomeIcon icon={faXmarkCircle} />
        </div>
        <img className="m-2 object-cover" src={image} />
      </div>
    </>
  );
};

export default Modal;
