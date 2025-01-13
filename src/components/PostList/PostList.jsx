import { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "./components/PostItem/PostItem";
import Skeleton from "../Skeleton/Skeleton";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 20px;
`;

export default function PostList({ posts, isLoading }) {
  return (
    <List>
      {!isLoading && posts.map((item) => <PostItem key={item.id} {...item} />)}
      {isLoading &&
        new Array(3).fill().map((_, index) => <Skeleton key={index} />)}
    </List>
  );
}
