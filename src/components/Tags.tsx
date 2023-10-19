import { FC } from "react";

interface Props {
  tags: string[];
  setClicked: (tags: string[]) => void;
  clickedTags: string[];
}

const Tags: FC<Props> = ({ tags, setClicked, clickedTags }) => {
  const onSelect = (tag: string) => {
    // console.log(tag); // printing tag ok
    if (clickedTags.includes(tag)) {
      const filtered = clickedTags.filter((item) => item !== tag);
      setClicked(filtered);
      console.log(filtered); // ok
    } else {
      setClicked([...clickedTags, tag]);
      console.log([...clickedTags, tag]); // ok
    }
  };
  return (
    <div className="flex justify-center gap-1 mt-2">
      {tags.map((tag, index) => (
        <div className="cursor-pointer text-sm p-1 px-2 border-[1px] border-gray-300 rounded-full font-regular text-gray-400" key={index} onClick={()=>onSelect(tag)}>
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
