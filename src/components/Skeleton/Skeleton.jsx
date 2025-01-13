import styled from "styled-components";

const Item = styled.div`
  background-color: var(--color-text);
  height: 300px;
  border-radius: 6px;
  overflow: hidden;
  animation: blink 1.4s infinite ease-in-out;

  @keyframes blink {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 210px;
  background-color: #ccc;
`;

const Title = styled.div`
  width: 100px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

const Desc = styled.div`
  width: 200px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Skeleton() {
  return (
    <Item>
      <Image />

      <Wrapper>
        <Title />
        <Desc />
      </Wrapper>
    </Item>
  );
}
