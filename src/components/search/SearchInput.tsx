import { FC, useState, useEffect, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { autocompleteData } from "../../data/dummy";

interface Props {
  selectedTags: string[];
  setClicked: (tags: string[]) => void;
}

const SearchInput: FC<Props> = ({ selectedTags, setClicked }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [isComposing, setIsComposing] = useState(false);

  // 🌐 fetching data (검색엔진 키워드 전부)
  // -> 이렇게 하면 query 바뀔때마다 api 호출하게 되는데 이건 비효율적아닌가
  // + react-query 사용 예정
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
    setWords(selectedTags);
  }, [autocompleteData, selectedTags]);

  // TODO: optimize with trie DS
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
    if (e.key === "Enter" && !isComposing) {
      setWords([...words, query]);
      setQuery("");
      setClicked([...words, query]);
    }
  };

  const handleDelete = (wordToDelete: string) => {
    const newWords = words.filter((word) => word !== wordToDelete);
    setWords(newWords);
    setClicked(newWords);
  };

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && query === "") {
      const newWords = words.slice(0, words.length - 1);
      setWords(newWords);
      setClicked(newWords);
    }
  };

  const handleComposition = (e: React.CompositionEvent<HTMLInputElement>) => {
    if (e.type === "compositionend") {
      setIsComposing(false);
    } else {
      setIsComposing(true);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex relative w-[90vw] h-[39px] border-solid border-[1px] border-gray-300 rounded-[20px] p-1 px-[4px]">
        <div className="flex gap-[3px] flex-shrink-0">
          {words.map((word, index) => (
            <div className="border-indigo-300 border-2 text-sm pb-1 pt-[3px] px-2 rounded-full">
              <span className="text-indigo-400 font-regular" key={index}>
                {word}{" "}
              </span>
              <span
                className="text-indigo-300 cursor-pointer"
                onClick={() => handleDelete(word)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </span>
            </div>
          ))}
        </div>
        <div className="ml-2 flex relative flex-grow">
          <input
            className="flex-grow bg-transparent text-sm text-gray-400 overflow-hidden focus:outline-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              handleEnter(e);
              handleBackspace(e);
            }}
            onCompositionStart={handleComposition}
            onCompositionEnd={handleComposition}
          />
          <ul className="absolute top-[33px] right-2 w-[98%]">
            {filteredSuggestions.map((item, index) => (
              <li
                className="text-indigo-400 text-sm bg-white bg-opacity-90 align-baseline p-1 text-end hover:bg-indigo-100/90 hover:text-indigo-600"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            type="button"
            className="text-gray-300 text-sm absolute rounded-full right-3 top-2 bg-white bg-opacity-50"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
