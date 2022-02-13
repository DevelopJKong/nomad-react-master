import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }

`;


const Box = styled.div`
  height:200px;
  width:200px;
  background-color:tomato;
  display: flex;
  align-items:center;
  justify-content: center;
  animation: ${animation} 1s linear infinite;
  span {
    font-size:36px;
    &:hover {
      font-size:40px;
    }
  }
`;



function App() {
  return (
    <Wrapper>
      <Box>
        <span>😎</span>
      </Box>
    </Wrapper>
  );
}

export default App;
