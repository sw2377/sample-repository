import logo from "./logo.svg";
import * as S from "./App.style";

function App() {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, React!</p>
        <p>Hi, Javascript!</p>
        <p>something...</p>
        <p>something 2</p>
        <p>feature/sample</p>
      </S.Header>
    </S.Container>
  );
}

export default App;
