import { FC, useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import Tags from "../components/Tags";
import { mainTags } from "../data/dummy";

const Browse: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(mainTags);
  }, []);
  return (
    <>
      <SearchInput setClicked={setSelectedTags} selectedTags={selectedTags} />
      <Tags
        tags={tags}
        setClicked={setSelectedTags}
        clickedTags={selectedTags}
      />
    </>
  );
};

export default Browse;
