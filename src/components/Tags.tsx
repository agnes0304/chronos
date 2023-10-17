import { FC } from "react";

interface Props {
  tags: string[];
  setClicked: (tags: string[]) => void;
  clickedTags: string[];
}

const Tags: FC<Props> = ({ tags, setClicked, clickedTags }) => {
  const onSelect = (tag: string) => {
    if (clickedTags.includes(tag)) {
      const filtered = clickedTags.filter((item) => item !== tag);
      setClicked(filtered);
    } else {
      setClicked([...clickedTags, tag]);
    }
  };
  return (
    <div>
      {tags.map((tag, index) => (
        <div key={index} onClick={()=>onSelect}>
          <span>{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
