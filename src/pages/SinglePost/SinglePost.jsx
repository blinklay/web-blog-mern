import { useParams } from "react-router-dom";
import H1 from "../../components/H1/H1";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Description = styled.div`
  margin-top: 20px;
`;

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <>
      <H1>{post.title}</H1>

      <Image src={post.imageUrl} alt="post image" />
      <Description>{post.description}</Description>
    </>
  );
}
