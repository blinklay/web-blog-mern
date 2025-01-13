import styled from "styled-components";
import H1 from "../../components/H1/H1";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import PostList from "../../components/PostList/PostList";
import Result from "./components/Result/Result";
import Loader from "../../components/Loader/Loader";

const StyledInput = styled.input`
  width: 100%;
  font-size: 21px;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SearchForm = styled.form`
  display: flex;
`;

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.filter((post) => post.title.includes(searchValue)));
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <H1>Поиск</H1>

      <SearchForm onSubmit={onSearch}>
        <StyledInput
          value={searchValue}
          onChange={onChange}
          type="text"
          placeholder="Например: <название_статьи> или <описание_статьи>"
        />
        <Button>поиск</Button>
      </SearchForm>

      {isLoading && <Loader />}
      {!isLoading && posts.length === 0 && (
        <div>По вашему запросу ничего не найдено!</div>
      )}
      {!isLoading && posts.length !== 0 && <Result posts={posts} />}
    </div>
  );
}
