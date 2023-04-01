import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import QuesAns from "./components/QuesAns/QuesAns";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <QuesAns></QuesAns>
    </div>
  );
}

export default App;
