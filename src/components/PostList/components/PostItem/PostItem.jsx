import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled(Link)`
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

const PostInfo = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.div``;

export default function PostItem({ title, imageUrl, description }) {
  return (
    <Item>
      <Image src={imageUrl} alt="post image" />

      <PostInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </PostInfo>
    </Item>
  );
}
