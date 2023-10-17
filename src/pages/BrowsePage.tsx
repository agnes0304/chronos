import { FC, useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import Tags from "../components/Tags";
import Logo from "../components/Logo";

import { mainTags } from "../data/dummy";

const BrowsePage: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(mainTags);
  }, []);

  return (
    <>
      <Logo />
      <SearchInput selectedTags={selectedTags} />
      <Tags
        tags={tags}
        setClicked={setSelectedTags}
        clickedTags={selectedTags}
      />
    </>
  );
};

export default BrowsePage;
