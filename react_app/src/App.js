import "./App.css";
import Banner from "./Components/Layout/Banner";
import Nav from "./Components/Layout/Nav";
import Row from "./Components/Layout/Row";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <Row />
    </div>
  );
};

export default App;
