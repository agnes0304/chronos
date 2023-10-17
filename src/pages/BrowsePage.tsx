import { FC, useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import Tag from "../components/Tag";

const BrowsePage: FC = () => {
  return (
    <>
      <SearchInput />
      {/* 설정한 키워드로 mapping */}
      <Tag />
    </>
  );
};

export default BrowsePage;
