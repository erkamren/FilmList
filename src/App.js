import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
