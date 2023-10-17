import { FC, useState, useEffect, KeyboardEvent } from "react";
import { autocompleteData } from "../data/dummy";

interface Props {
  selectedTags: string[];
}

const SearchInput: FC<Props> = ({ selectedTags }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>(selectedTags);

  // 🌐 fetching data (검색엔진 키워드 전부)
  // -> 이렇게 하면 query 바뀔때마다 api 호출하게 되는데 이건 비효율적아닌가
  //
  // useEffect(() => {
  //   if (query) {
  //     axios.get(`/api/suggestions?query=${query}`)
  //       .then(response => {
  //         setSuggestions(response.data);
  //       });
  //   }
  // }, [query]);

  useEffect(() => {
    setSuggestions(autocompleteData);
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = suggestions.filter((item) => {
        return item.includes(query);
      });
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, suggestions]);

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setWords([...words, query]);
      setQuery("");
    }
  };

  return (
    // fake input box
    <div>
      {/* tags in input area */}
      <div>
        {words.map((word, index) => (
          <div>
            <span key={index}>{word}</span>
          </div>
        ))}
      </div>
      {/* real input box */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleEnter}
      />
      {/* autocomplete */}
      <ul>
        {filteredSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
