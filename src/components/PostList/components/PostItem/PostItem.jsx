import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled(Link)`
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
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

const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isLoaded",
})`
  width: 100%;
  height: 210px;
  object-fit: cover;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const NoImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isLoaded",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 210px;
  object-fit: cover;
  opacity: ${(props) => (props.isLoaded ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

export default function PostItem({ id, title, imageUrl, description }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <Item to={`/post/${id}`}>
      <NoImage
        src="/images/no-image.png"
        alt="no-image"
        isLoaded={isImageLoaded}
      />
      <Image
        src={imageUrl}
        alt="post image"
        onLoad={onImageLoaded}
        isLoaded={isImageLoaded}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/no-image.png";
        }}
      />
      <PostInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </PostInfo>
    </Item>
  );
}
