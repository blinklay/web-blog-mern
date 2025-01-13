import styled from "styled-components";
import PostList from "../../../../components/PostList/PostList";

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

export default function Result({ posts }) {
  return (
    <Wrapper>
      <Title>Результаты поиска:</Title>
      <PostList posts={posts} />
    </Wrapper>
  );
}
