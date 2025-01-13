import { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "./components/PostItem/PostItem";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 20px;
`;

export default function PostList({ posts }) {
  return (
    <List>
      {posts.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </List>
  );
}
