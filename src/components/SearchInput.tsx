import { FC, useState, useEffect } from "react";

import autocompleteData from "../data/dummy";

const SearchInput: FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

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

  // query가 바뀔때마다 suggestions 필터링해서 보여주기
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

  return (
    <div>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
      <ul>
        {filteredSuggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
