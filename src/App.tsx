import styled from "styled-components";

import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home>
        <Video></Video>
        <Contents></Contents>
      </Home>
    </div>
  );
}

const Home = styled.div``;
const Video = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
`;
const Contents = styled.div`
  min-height: 100vh;
`;

export default App;
