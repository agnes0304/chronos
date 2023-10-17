import { FC, useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import Tags from "../components/Tags";

import { mainTags } from "../data/dummy";

const BrowsePage: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(mainTags);
  }, []);

  return (
    <>
      <form>
        <SearchInput selectedTags={selectedTags} />
        <Tags
          tags={tags}
          setClicked={setSelectedTags}
          clickedTags={selectedTags}
        />
      </form>
      {/* input focus없이 enter치거나, button onClick */}
      <button></button>
    </>
  );
};

export default BrowsePage;
